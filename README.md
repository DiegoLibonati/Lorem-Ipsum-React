# Lorem-Ipsum-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a web application that generates lorem ipsum paragraphs each time the user enters a number and press `Generate`. The allowed values are between 1 to infinite paragraphs. If the user enters a negative number it will generate a single paragraph but if the user enters a random number like 15, the final result will be 15 paragraphs.

## Technologies used

1. React JS
2. CSS3

## Galery

![Lorem-ipsum-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/loremreact-0.jpg)

![Lorem-ipsum-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/loremreact-1.jpg)

![Lorem-ipsum-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/loremreact-2.jpg)

![Lorem-ipsum-App-Page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/loremreact-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Lorem%20Ipsum%20App%20Page`

## Video

https://user-images.githubusercontent.com/99032604/198900819-ac2bbb47-341c-427e-b0ff-2b2f86546bda.mp4

## Documentation

From `helpers/texts.js` we get all the paragraphs, if you want to add a new paragraph you can do it by adding a new element here:

```
export const text = [
  `I'm baby intelligentsia hot chicken iPhone, letterpress food truck lomo roof party celiac +1 photo booth yr thundercats affogato. Poke pork belly PBR&B, vape fashion axe hashtag chillwave brooklyn cloud bread marfa cold-pressed adaptogen. Ennui tilde fam, chicharrones irony you probably haven't heard of them raclette poutine. Intelligentsia seitan chicharrones, enamel pin brunch vaporware art party kitsch retro. Vegan sustainable tumeric cronut. Pug aesthetic PBR&B glossier selvage, art party salvia wayfarers. Etsy taiyaki typewriter chicharrones, taxidermy cold-pressed pabst vinyl cronut pok pok 8-bit fam.`,
  `Activated charcoal direct trade palo santo vape everyday carry pork belly mustache kitsch gochujang. Vexillologist shoreditch deep v, keytar ethical seitan sartorial kale chips irony tumeric microdosing brunch. Keffiyeh master cleanse next level, glossier lumbersexual shaman af edison bulb distillery knausgaard vape small batch portland. Cred truffaut vape deep v +1, gastropub hot chicken raw denim helvetica umami offal.`,
  `Dreamcatcher sartorial asymmetrical crucifix wolf godard, coloring book squid freegan affogato lumbersexual franzen. Drinking vinegar vape chillwave pinterest tofu pug hella sartorial neutra cray tumeric. Poke cloud bread XOXO salvia. Glossier jean shorts craft beer gastropub, squid pitchfork humblebrag listicle taiyaki messenger bag retro thundercats subway tile raw denim. Hoodie asymmetrical food truck listicle pour-over.`,
  `Pop-up tote bag twee squid asymmetrical lyft roof party ugh try-hard glossier pabst bicycle rights jean shorts single-origin coffee. IPhone tumblr narwhal, tattooed mumblecore you probably haven't heard of them XOXO authentic art party bicycle rights. Bespoke bitters master cleanse austin authentic lumbersexual mixtape man bun art party tilde swag. Tacos bitters chicharrones thundercats selfies chartreuse chia. Put a bird on it taxidermy cornhole VHS, tousled ennui fam hexagon craft beer marfa DIY pinterest.`,
  `Air plant deep v polaroid church-key. Farm-to-table ramps put a bird on it pickled aesthetic pork belly beard tbh street art pabst. Pop-up cliche before they sold out hoodie heirloom flannel schlitz organic. Crucifix forage cardigan before they sold out umami echo park subway tile art party squid shoreditch photo booth.`,
  `Yr offal cornhole neutra. Cronut kale chips hoodie, mustache tilde tacos palo santo fashion axe whatever pop-up post-ironic pitchfork pok pok ethical. Literally freegan post-ironic wolf listicle synth gochujang tousled palo santo 3 wolf moon health goth next level. Asymmetrical you probably haven't heard of them lomo post-ironic, pitchfork crucifix narwhal retro chia tofu schlitz. Kitsch keytar normcore listicle flexitarian fashion axe chartreuse jianbing yr vice flannel cred.`,
  `Jianbing live-edge bicycle rights messenger bag, street art offal squid gastropub food truck kale chips locavore. Mustache humblebrag banjo, shaman offal photo booth coloring book mumblecore typewriter tbh you probably haven't heard of them. Disrupt glossier umami pop-up, schlitz listicle keytar ramps. Try-hard tumblr crucifix aesthetic lyft.`,
  `Try-hard woke irony selvage listicle, literally adaptogen tilde messenger bag deep v hexagon stumptown gastropub. YOLO yuccie godard copper mug, slow-carb put a bird on it williamsburg offal craft beer trust fund sustainable palo santo 8-bit. Venmo XOXO drinking vinegar kale chips cred semiotics, vinyl helvetica hoodie bespoke leggings pop-up. Polaroid lomo tofu vape. Chicharrones mumblecore taiyaki, direct trade prism vinyl cardigan subway tile flexitarian. Aesthetic food truck glossier coloring book. Biodiesel distillery crucifix schlitz skateboard ennui master cleanse pok pok normcore cardigan.`,
  `Cliche organic woke yr gluten-free, twee PBR&B everyday carry 8-bit roof party. Hexagon craft beer pinterest humblebrag raw denim pabst schlitz celiac. Quinoa hoodie man braid, iPhone flannel chia scenester pinterest kickstarter enamel pin health goth aesthetic art party cliche mustache. Irony cred street art locavore green juice.`,
  `Tilde twee af drinking vinegar trust fund. Ramps vaporware hell of kombucha 8-bit chambray YOLO wolf vinyl pop-up cornhole activated charcoal mixtape. Mixtape marfa before they sold out XOXO poutine craft beer scenester cronut drinking vinegar knausgaard you probably haven't heard of them hella. Literally selvage mumblecore activated charcoal echo park vegan deep v fingerstache irony kogi microdosing trust fund. Schlitz cloud bread activated charcoal, master cleanse kitsch shoreditch umami bicycle rights la croix post-ironic biodiesel edison bulb. 8-bit disrupt banjo selvage. Flannel selfies organic put a bird on it keytar, lo-fi health goth umami fam four loko kombucha adaptogen hammock austin tilde.`,
];
```

The application logic is located in the `App.js` component. Basically we have two states a state called `paragraphs` which is where all the paragraphs that we want to search will be stored and the `count` state that will represent the value of the input each time `Generate` is touched. In addition each time that the `Generate` button is touched the `handleSubmit()` function will be executed and it will receive the event and it will modify a variable called `amount` to the value entered. Then through a for in which each iteration will return a random paragraph to the new array. And at the end we will modify the state of `paragraphs` to the new array:

```
const [paragraphs, setParagraphs] = useState([]);
const [count, setCount] = useState(0);

const handleSubmit = (e) => {
  e.preventDefault();

  const newArray = [];
  const amount = parseInt(count);

  if (amount <= 0) {
    amount = 1;
  }

  for (let i = 0; i < amount; i++) {
    newArray.push(text[Math.floor(Math.random() * text.length)]);
  }

  setParagraphs(newArray);
};
```
