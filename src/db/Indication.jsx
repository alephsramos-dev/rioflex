// Assets
import Lacres from "@assets/service/rioflex-etiqueta-lacres.webp";
import Pizza from "@assets/service/rioflex-etiqueta-pizza.webp";
import Acai from "@assets/service/rioflex-etiqueta-acai.webp";
import Delivery from "@assets/service/rioflex-etiqueta-delivery.webp";
import Artesanais from "@assets/service/rioflex-etiqueta-produtos-artesanais.webp";

import Bopp from "@assets/service/BOPP.JPG";
import Ecommerce from "@assets/service/Ecommerce.JPG";
import LacreSeguranca from "@assets/service/LacreSeguranca.JPG";
import Personalizadas from "@assets/service/Personalizadas.JPG";

const indicationData = [
    {
        id: 1,
        slug: "etiquetas-em-bopp",
        title: "Etiquetas em BOPP",
        description: "Material plástico nobre, impermeável e que não rasga. Suporta baixas temperaturas e umidade sem perder a qualidade da impressão.",
        items: [
            { name: "Frigoríficos e Congelados" },
            { name: "Bebidas e Sucos" },
            { name: "Cosméticos e Química" },
            { name: "Setor Hospitalar" }
        ],
        image: Bopp
    },
    {
        id: 2,
        slug: "etiquetas-para-e-commerce",
        title: "Etiquetas Térmicas para E-commerce ",
        description: "Papel de alta sensibilidade para impressão rápida e sem ribbon. Possui serrilha precisa que não trava a impressora e garante agilidade na expedição.",
        items: [
            { name: "Marketplace" },
            { name: "Identificação de Caixas" },
            { name: "Transportadoras" },
            { name: "Centros de Distribuição" }
        ],
        image: Ecommerce
    },
    {
        id: 3,
        slug: "lacres-de-seguranca",
        title: "Lacres de Segurança",
        description: "Papel destrutível com adesivo de alta aderência. Garante a integridade do pedido: se tentarem remover, ele rasga e evidencia a violação.",
        items: [
            { name: "Pizzarias e Delivery" },
            { name: "Hamburguerias" },
            { name: "Farmácias de Manipulação" },
            { name: "Apps de Entrega" }
        ],
        image: LacreSeguranca
    },
    {
        id: 4,
        slug: "rotulos-e-etiquetas-personalizadas",
        title: "Rótulos e Etiquetas Personalizadas",
        description: "Destaque visual com cortes especiais e cores vivas em diversos materiais. Valorize seu produto na prateleira com acabamento profissional.",
        items: [
            { name: "Docerias e Padarias" },
            { name: "Confecções e Varejo" },
            { name: "Embalagens de Presente" },
            { name: "Produtos Artesanais" }
        ],
        image: Personalizadas
    }
]

export default indicationData;