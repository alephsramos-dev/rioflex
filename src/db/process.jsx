import { WhatsappLogo, Calculator, Truck } from "@phosphor-icons/react/dist/ssr";

const processData = [
    {
        id: 1,
        step: "1",
        slug: "voce-chama",
        title: "Você chama",
        description: "Clique no botão e fale direto com um especialista. Sem filas de espera.",
        icon: WhatsappLogo,
        bgColor: "rgb(254, 141, 34)",
        txtColor: "rgb(255, 255, 255)"
    },
    {
        id: 2,
        step: "2",
        slug: "nos-orcamos",
        title: "Nós orçamos",
        description: "Entendemos sua demanda (medida/material) e passamos a cotação na hora.",
        icon: Calculator,
        bgColor: "rgb(32, 33, 39)",
        txtColor: "rgb(255, 255, 255)"
    },
    {
        id: 3,
        step: "3",
        slug: "tudo-pronto",
        title: "Tudo pronto",
        description: "Aprovou? Seu pedido entra em produção imediatamente e segue para a entrega.",
        icon: Truck,
        bgColor: "rgb(24, 179, 90)",
        txtColor: "rgb(255, 255, 255)"
    }
]

export default processData;