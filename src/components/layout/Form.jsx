import { useForm } from "react-hook-form";
import { useEffect, useMemo, useRef, useState } from "react";
import { down } from '@styles/media'
import styled from "@emotion/styled";
import Title from "@components/text/Title";

const FormStyled = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 24px;

    & .form-title {
        font-size: 32px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.neutral[300]};

        ${down("tablet")} {
            font-size: 24px;
        }
    }

    ${down("tablet")} {
        width: 100%;
    }

    & .label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        border: 1px solid ${(props) => props.theme.colors.neutral[800]};
        position: relative;
        padding: 12px 12px 10px 12px ;

        & .label-title {
            color: ${(props) => props.theme.colors.neutral[400]};
            font-weight: 300;
            font-size: 12px;
            position: absolute;
            left: 8px;
            top: -8px;
            background-color: ${(props) => props.theme.colors.neutral[900]};
            padding: 0 4px;
        }

        & > input {
            width: 100%;
            font-weight: 400;
            color: ${(props) => props.theme.colors.neutral[300]};

            &::placeholder {
                color:  ${(props) => props.theme.colors.neutral[700]};
                font-weight: 300;
                font-size: 14px;
            }
        }

        & select {
            font-weight: 400;
            color: ${(props) => props.theme.colors.neutral[300]};

            &:invalid {
                color: red;
            }

            & option {
                padding: 12px;
                border: 10px solid red;
            }
            
            & option:invalid {
                color: red;
            }
        }

        & .error-text {
            font-size: 12px;
            font-weight: 300;
            position: absolute;
            right: 10px;
            color: ${(props) => props.theme.colors.primary.dark};
        }
    }

    & .button-submit {
        width: 100%;
        padding: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme.colors.primary.main};
        color: ${(props) => props.theme.colors.neutral[100]};
        font-size: 18px;
    }
`

// Custom dropdown styles (keeps spacing within .label, preserves layout)
const Dropdown = styled.div`
    width: 100%;
    position: relative;
    color: ${(props) => props.theme.colors.neutral[300]};
`;

const DropdownSelected = styled.button`
    width: 100%;
    text-align: left;
    color: ${(props) => props.theme.colors.neutral[300]};
    background: transparent;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Placeholder = styled.span`
    color: ${(props) => props.theme.colors.neutral[700]};
    font-weight: 300;
    font-size: 14px;
`;

const Caret = styled.span`
    margin-left: 8px;
    opacity: 0.7;
`;

const DropdownList = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 8px);
    background: ${(props) => props.theme.colors.neutral[900]};
    border: 1px solid ${(props) => props.theme.colors.neutral[800]};
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-height: 220px;
    overflow: auto;
`;

const DropdownOption = styled.button`
    text-align: left;
    padding: 10px 8px;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.neutral[300]};
    cursor: pointer;
    font: inherit;

    &:hover, &:focus {
        background: ${(props) => props.theme.colors.neutral[800]};
        outline: none;
    }
`;

export default function FormLayout() {

    const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm({
        defaultValues: {
            productType: '',
            utm_source: '',
            utm_medium: '',
            utm_campaign: '',
            utm_term: '',
            utm_content: '',
            utm_id: '',
            gclid: '',
            fbclid: '',
            msclkid: '',
            page_url: '',
            page_referrer: ''
        }
    })

    // Custom dropdown state
    const [isOpen, setIsOpen] = useState(false);
    const productTypeValue = watch('productType');
    const dropdownRef = useRef(null);

    const productOptions = useMemo(() => ([
        { value: 'restaurante', label: 'Restaurante' },
        { value: 'delivery', label: 'Delivery' },
        { value: 'outros', label: 'Outros' },
    ]), []);

    // Close dropdown on outside click
    useEffect(() => {
        const onClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', onClickOutside);
        return () => document.removeEventListener('mousedown', onClickOutside);
    }, []);

    // Parse URL tracking params and set hidden fields
    useEffect(() => {
        try {
            const url = new URL(window.location.href);
            const params = url.searchParams;
            const get = (key) => params.get(key) || '';

            const tracking = {
                utm_source: get('utm_source'),
                utm_medium: get('utm_medium'),
                utm_campaign: get('utm_campaign'),
                utm_term: get('utm_term'),
                utm_content: get('utm_content'),
                utm_id: get('utm_id'),
                gclid: get('gclid') || get('gbraid') || '',
                fbclid: get('fbclid'),
                msclkid: get('msclkid'),
                page_url: window.location.href,
                page_referrer: document.referrer || ''
            };

            Object.entries(tracking).forEach(([k, v]) => setValue(k, v, { shouldValidate: false, shouldDirty: false }));
        } catch (e) {
            // ignore
        }
    }, [setValue]);

    const onSubmit = async (data) => {
        // Build a payload whose keys match the Google Sheets header row
        // (example headers: nome, telefone, tipo_produto, quantidade_produto, page_url, page_referrer, utm_source, utm_term, utm_content, utm_campaign, utm_medium)
        const sheetPayload = {
            nome: data.name || '',
            telefone: data.tel || '',
            tipo_produto: data.productType || '',
            quantidade_produto: data.qtdLabel || '',
            page_url: data.page_url || window.location.href,
            page_referrer: data.page_referrer || document.referrer || '',
            utm_source: data.utm_source || '',
            utm_term: data.utm_term || '',
            utm_content: data.utm_content || '',
            utm_campaign: data.utm_campaign || '',
            utm_medium: data.utm_medium || '',
            submitted_at: new Date().toISOString()
        };

        // Helpful console output for debugging
        console.table(sheetPayload);

        const endpoint = import.meta.env.VITE_GSHEET_WEBAPP_URL;
        if (!endpoint) {
            console.warn('VITE_GSHEET_WEBAPP_URL is not set. Skipping network request.');
            return;
        }

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sheetPayload)
            });

            // If the response is JSON, try to read it for debug
            let text = '';
            try { text = await res.text(); } catch (e) { text = ''; }
            console.log('Sheets response:', res.ok, text);
        } catch (err) {
            console.error('Sheets submit failed:', err);
        }
    }

    const onError = (errors) => {
        console.error(errors)
    }

    return (
        <>
            <FormStyled onSubmit={handleSubmit(onSubmit)} className="formulario" id="contactForm" data-aos="fade-up">
                <Title
                    className="form-title"
                >
                    Preencha todos os campos corretamente
                </Title>

                <label className="label" data-aos="fade-up" data-aos-delay="100">
                    <span className="label-title">Qual o seu nome completo?</span>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite o seu nome aqui..."
                        {...register('name', { required: true, minLength: 3 })}
                    />
                    {errors?.name?.type === 'required' && <span className="error-text">*</span>}
                    {errors?.name?.type === 'minLength' && <span className="error-text">Precisa ter pelo menos 3 caracteres</span>}
                </label>
                <label className="label" data-aos="fade-up" data-aos-delay="200">
                    <span className="label-title">Coloque seu número do WhatsApp?</span>
                    <input
                        className=""
                        type="tel"
                        id="tel"
                        placeholder="Digite seu whatsapp..."
                        {...register('tel', { required: true, minLength: 9, maxLength: 16 })}
                    />
                    {errors?.tel?.type === 'required' && <span className="error-text">*</span>}
                    {errors?.tel?.type === 'minLength' && <span className="error-text">Precisa ter pelo menos 9 digitos</span>}
                    {errors?.tel?.type === 'maxLength' && <span className="error-text">Pode conter no máximo 16 digitos</span>}
                </label>
                <label className="label" data-aos="fade-up" data-aos-delay="300">
                    <span className="label-title">Qual tipo de produto você trabalha?</span>
                    {/* Hidden input registered with RHF to keep validation/state */}
                    <input type="hidden" id="productType" {...register('productType', { required: true })} />

                    <Dropdown ref={dropdownRef}>
                        <DropdownSelected
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen((v) => !v)}
                        >
                            {productTypeValue ? (
                                <span>{productOptions.find(o => o.value === productTypeValue)?.label || 'Selecione uma opção'}</span>
                            ) : (
                                <Placeholder>Selecione uma opção</Placeholder>
                            )}
                            <Caret>▾</Caret>
                        </DropdownSelected>
                        {isOpen && (
                            <DropdownList role="listbox">
                                {productOptions.map((opt) => (
                                    <DropdownOption
                                        key={opt.value}
                                        type="button"
                                        role="option"
                                        aria-selected={productTypeValue === opt.value}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setValue('productType', opt.value, { shouldValidate: true, shouldDirty: true });
                                            trigger('productType');
                                            setIsOpen(false);
                                        }}
                                    >
                                        {opt.label}
                                    </DropdownOption>
                                ))}
                            </DropdownList>
                        )}
                    </Dropdown>
                    {errors?.productType?.type === 'required' && <span className="error-text">*</span>}
                </label>
                <label className="label" data-aos="fade-up" data-aos-delay="400">
                    <span className="label-title">Qual seria a quantidade de etiquetas desejadas?</span>
                    <input
                        className=""
                        type="number"
                        id="qtdLabel"
                        placeholder="Digite um número estimado"
                        {...register('qtdLabel', { required: true, minLength: 0, valueAsNumber: true })}
                    />
                    {errors?.qtdLabel?.type === 'required' && <span className="error-text">*</span>}
                    {errors?.qtdLabel?.type === 'minLength' && <span className="error-text">Precisa ser maior que 0</span>}
                </label>
                {/* Hidden tracking fields to include in submission without affecting layout */}
                <input type="hidden" {...register('utm_source')} />
                <input type="hidden" {...register('utm_medium')} />
                <input type="hidden" {...register('utm_campaign')} />
                <input type="hidden" {...register('utm_term')} />
                <input type="hidden" {...register('utm_content')} />
                <input type="hidden" {...register('utm_id')} />
                <input type="hidden" {...register('gclid')} />
                <input type="hidden" {...register('fbclid')} />
                <input type="hidden" {...register('msclkid')} />
                <input type="hidden" {...register('page_url')} />
                <input type="hidden" {...register('page_referrer')} />

                <button type="submit" className="button-submit">
                    Solicitar orçamento grátis
                </button>
            </FormStyled>
        </>
    )

}


// // Apps Script - doPost que aceita JSON ou form-encoded
// function doPost(e) {
//   try {
//     // Extrai dados (suporta JSON ou form-encoded)
//     var data = {};
//     if (e.postData && e.postData.type === 'application/json') {
//       data = JSON.parse(e.postData.contents);
//     } else {
//       data = e.parameter || {};
//     }

//     // Substitua pelo ID da sua planilha (a parte longa da URL do Google Sheets)
//     var SPREADSHEET_ID = 'SUBSTITUA_POR_SEU_SPREADSHEET_ID';
//     var SHEET_NAME = 'Sheet1'; // ou o nome da aba que você usa

//     var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
//     var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

//     // Lê cabeçalhos (linha 1) e monta a linha conforme ordem do cabeçalho
//     var lastCol = Math.max(sheet.getLastColumn(), 1);
//     var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
//     var row = headers.map(function(h) {
//       // remove espaços extras no header e usa chave exata
//       var key = String(h).trim();
//       return (data[key] !== undefined && data[key] !== null) ? data[key] : '';
//     });

//     // Se quiser, adicionar timestamp como última coluna separada:
//     // row.push(new Date());

//     sheet.appendRow(row);

//     // Retorna JSON (ContentService). Deve funcionar para fetch() do browser.
//     return ContentService
//             .createTextOutput(JSON.stringify({result: 'success'}))
//             .setMimeType(ContentService.MimeType.JSON);
//   } catch (err) {
//     return ContentService
//             .createTextOutput(JSON.stringify({result: 'error', message: err.message}))
//             .setMimeType(ContentService.MimeType.JSON);
//   }
// }