import { CubeIcon, PaintBrushIcon, SealQuestionIcon } from "@phosphor-icons/react/dist/ssr";


const processData = [
    {
        id: 1,
        slug: "conte-nos-a-sua-ideia",
        title: "Conte-nos a sua ideia",
        description: "Você irá preencher um formulário curto e objetivo, apenas para que nossa equipe consiga entrar em contato, e ter uma conversa de alinhamento.",
        icon: SealQuestionIcon
    },
    {
        id: 2,
        slug: "aprovamos-o-design",
        title: "Aprovamos o design",
        description: "Após alinharmos todos os objetivos, começamos a parte de criar o design com base na ideias, após pronto, é enviado para aprovação",
        icon: PaintBrushIcon
    },
    {
        id: 3,
        slug: "voce-recebe",
        title: "Você recebe",
        description: "Concluindo todas as etapas, sua etiqueta entra em produção e será entregue dentro de alguns dias no seu endereço",
        icon: CubeIcon
    },
]

export default processData;