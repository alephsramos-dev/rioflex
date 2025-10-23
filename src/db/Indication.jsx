// Assets
import Lacres from "@assets/service/rioflex-etiqueta-lacres.webp";
import Pizza from "@assets/service/rioflex-etiqueta-pizza.webp";
import Acai from "@assets/service/rioflex-etiqueta-acai.webp";
import Delivery from "@assets/service/rioflex-etiqueta-delivery.webp";
import Artesanais from "@assets/service/rioflex-etiqueta-produtos-artesanais.webp";

const indicationData = [
    {
        id: 1,
        slug: "docerias",
        title: "Docerias",
        description: "Etiquetas para potes, saquinhos, embalagens",
        image: Acai
    },
    {
        id: 2,
        slug: "hamburguerias",
        title: "Hamburguerias",
        description: "Embalagens personalizadas",
        image: Lacres
    },
    {
        id: 3,
        slug: "pizzarias",
        title: "Pizzarias",
        description: "Caixas e delivery de pizza com sua marca",
        image: Pizza
    },
    {
        id: 4,
        slug: "restaurantes",
        title: "Restaurantes",
        description: "Potes, marmitas, produtos para delivery",
        image: Delivery
    },
    {
        id: 5,
        slug: "produtos-artesanais",
        title: "Produtos artesanais",
        description: "Identidade visual para seus produtos",
        image: Artesanais
    }
]

export default indicationData;