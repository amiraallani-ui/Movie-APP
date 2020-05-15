import React, { Component } from "react";
import Nav from "./Navbar";
import Card from "./Card";
import Terminal from "./images/Terminal.png";
import Titanic from "./images/5224976.webp";
import Imitation from "./images/imitation.jpg";
import Colonia from "./images/Colonia-German-Poster.webp";
import Lion from "./images/download.jpg";
import Perfume from "./images/unnamed.jpg";
import Home from "./images/home.jpg";
import Diable from "./images/Diable.jpg";
import Intern from "./images/Intern.jpg";
import List from "./images/List.jpg";
import Turque from "./images/Turque.jpg";
import Holiday from "./images/Holiday.jpg";
import Mama from "./images/mamamia.jpg";
import amour from "./images/amour.jpg";
let movies = [
  {
    title: "The Terminal",
    genre: "comédie dramatique",
    img: Terminal,
    description:
      "Un immigrant fuyant la guerre qui ravage sa patrie minuscule d'Europe de l'Est se retrouve dans le terminal d'un aéroport de New York. Quand la guerre détruit totalement sa nation d'origine, l'homme comprend que son passeport et tous ses papiers d'identité ne sont plus valides. Tel un sans-abri, il s'installe dans le terminal, se lie d'amitié avec le personnel de l'aéroport et va jusqu'à tomber amoureux d'une hôtesse de l'air...",
    star: 3,
  },
  {
    title: "Titanic",
    genre: "Romance/Drame",
    img: Titanic,
    description:
      "En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.",
    star: 4,
  },
  {
    title: "Imitation Game",
    genre: "Guerre/Drame",
    img: Imitation,
    description:
      "Mathématicien de génie, Alan Turing est chargé par les autorités britanniques, dès 1939, de briser Enigma, le code secret utilisé par les Allemands. Une mission de haute importance car cette découverte pourrait mettre fin à la guerre. Il travaille sans relâche au sein des équipes réunies à Bletchley Park. Les relations d'Alan Turing avec ses collègues, Hugh Alexander, Denniston et Nock, sont compliquées, tant le scientifique se montre asocial.",
    star: 5,
  },
  {
    title: "Colonia",
    genre: "Thriller/Romance ",
    img: Colonia,
    description:
      "Chili, 1973. Le Général Pinochet s'empare du pouvoir par la force. Les opposants au coup d'État descendent dans la rue. Parmi les manifestants, un jeune couple, Daniel, photographe et son amie Lena. Daniel est arrêté par la nouvelle police politique. Il est conduit dans un camp secret, caché dans un lieu reculé au sein d'une secte dirigée par un ancien nazi. Une prison dont personne n'est jamais sorti. Pour retrouver son amant, Lena va pourtant rentrer dans la Colonia Dignidad.",
    star: 2,
  },
  {
    title: "Lion",
    genre: "Drame",
    img: Lion,
    description:
      "A 5 ans, Saroo se retrouve seul dans un train traversant l'Inde qui l'emmène malgré lui à des milliers de kilomètres de sa famille. Perdu, le petit garçon doit apprendre à survivre seul dans l'immense ville de Calcutta. Après des mois d'errance, il est recueilli dans un orphelinat et adopté par un couple d'Australiens. 25 ans plus tard, Saroo est devenu un véritable Australien mais pense toujours à sa famille en Inde.",
    star: 5,
  },
  {
    title: "Perfume",
    genre: "Thriller/Drame ",
    img: Perfume,
    description:
      "Au XVIIe siècle, Jean-Baptiste Grenouille, orphelin solitaire et malade, devient un jeune homme à part grâce à un don unique : son odorat. Il parvient à se faire embaucher comme apprenti chez les maîtres parfumeurs de Paris, pour qui il compose des chefs-d'oeuvre olfactifs. Cependant, son but ultime est la mise au point de la fragrance idéale, qui lui permettrait de séduire instantanément tous ceux qui le croiseraient.",
    star: 1,
  },
  {
    title: "Home Alone",
    genre: "Famille/Comédie",
    img: Home,
    description:
      "Les McCallister décident de s'offrir un petit voyage à Paris pour les fêtes de fin d'année. Le grand départ se fait de manière un peu précipitée et les parents oublient leur plus jeune fils, Kevin âgé de neuf ans, à la maison. Pour ce dernier, c'est un réel bonheur d'être seul, mais sa tranquillité ne va pas durer longtemps.",
    star: 3,
  },
  {
    title: "Le diable s'habille en Prada",
    genre: "Comédie/Comédie dramatique",
    img: Diable,
    description:
      "Son diplôme de journalisme en poche, Andrea débarque à New York où elle décroche un premier emploi en tant qu'assistante de la rédactrice en chef d'un prestigieux magazine de mode. Un job de rêve. En apparence seulement car sa boss est en réalité un monstre tyrannique et caractériel ; Andrea, qui envisage son nouveau travail comme un tremplin vers une illustre carrière de journaliste, décide d'endurer les sévices de sa diablesse de patronne.",
    star: 5,
  },
  {
    title: "The Intern",
    genre: "Comédie/Comédie dramatique",
    img: Intern,
    description:
      "Ben Whittaker, un veuf de 70 ans s'aperçoit que la retraite ne correspond pas vraiment à l'idée qu'il s'en faisait. Dès que l'occasion se présente de reprendre du service, il accepte un poste de stagiaire sur un site Internet de mode, créé et dirigé par Jules Ostin.",
    star: 4,
  },
  {
    title: "The Bucket List",
    genre: "Comédie/Drame",
    img: List,
    description:
      "Lorsqu'on leur annonce qu'ils sont tous deux condamnés, deux patients d'un hôpital - un irascible milliardaire et un modeste mécanicien - décident de croquer enfin la vie à pleines dents : ils rédigent une liste de choses à faire sans plus attendre avant de mourir et s'embarquent alors pour la plus belle des virées.",
    star: 4,
  },
  {
    title: "Koğuştaki Mucize",
    genre: "	drame",
    img: Turque,
    description:
      "Memo, un Berger souffrant d'un handicap mental, vit avec sa petite fille adorée et sa grand-mère dans un village de la côte Egéenne pendant la période du coup d'Etat. Un beau jour en 1983, la vie de Memo se voit subitement bouleversée quand la fille du commandant, un haut responable durant la loi martiale meurt.",
    star: 3,
  },
  {
    title: "The Holiday",
    genre: "Romance/Comédie",
    img: Holiday,
    description:
      "Une Américaine (Amanda) et une Anglaise (Iris), toutes deux déçues des hommes, décident, sans se connaître, d'échanger leurs appartements.",
    star: 5,
  },
  {
    title: "Mamma Mia!",
    genre: "Musical/Comédie",
    img: Mama,
    description:
      "C'est en 1999, sur l'île grecque de Kalokairi que l'aventure commence, dans un hôtel méditerranéen isolé, la villa Donna, tenu par Donna, sa fille Sophie et le fiancé de Sophie, Sky. Juste à temps pour son mariage prochain, Sophie poste nerveusement trois invitations destinées à trois hommes bien différents dont elle pense que l'un d'eux est son père. De trois points du globe, trois hommes s'apprêtent à retourner sur l'île et vers la femme qui les avait enchantés 20 ans auparavant.",
    star: 3,
  },
  {
    title: "J'ai failli te dire je t'aime",
    genre: "Romance",
    img: amour,
    description:
      "Alex est un publicitaire en vogue qui a tout pour lui. Cependant, il broie du noir car sa fiancée vient de le plaquer. Un matin, il croise accidentellement la route de Niki, jeune étudiante pétillante et pleine de vie. C'est le coup de foudre. Petit détail : elle a 20 ans de moins que lui et va totalement chambouler sa vie !",
    star: 5,
  },
];

export default class Acceuil extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav movie={movies} />
        <Card mov={movies} fav={this.props.favoris} d={this.props.des} />
      </div>
    );
  }
}
