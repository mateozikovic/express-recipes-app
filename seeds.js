var mongoose = require("mongoose");
var Recipe = require("./models/recipe");

var data = [
    {
        name: "Pizza",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        description: "Recept za pizza tijesto, pizza majstori čuvaju kao zmija noge, a zapravo je jednostavno, istraživao sam, i evo: BIT je glatko brašno ili maks. 3:1 za glatko:oštro za tijesto, a TEMPERATURA PEČENJA je najvažnija, ostalo je vaša kreacija… Napravite tijesto po receptu, stavite u VRELU pećnicu i postat ćete vrhunski pizza majstor.",
        ingredients: "500g brašna, 0.3dl ulja, 2dl vode",
        preparation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: " 50 min",
        difficulty: "Medium"
    },
    {
        name: "Njoki",
        image: "https://coolinarika.azureedge.net/images/_variations/c/4/c403104e509330c3bdee863026eb7765_view_l.jpg?v=3",
        description: "Moja je nona radila savršene njoke. I ne samo jednu vrstu. Najbolji su mi ipak njeni njoki od krumpira. Zanimljivo je to u kojoj količini ih je radila – mislim da je tom količinom mogla nahraniti desetero ljudi bez problema. No uvijek su bili tako dobri da je količina bila taman za nas ukućane. A za toliko njoka trebalo je imati strpljenja… njoj ga nije nedostajalo! Ja sam u ovome receptu količinu ipak prilagodila jednoj četveročlanoj obitelji, na način kako ih je ona radila. A uz to vrlo ih je lako 'obojati' u, recimo, zeleno!",
        ingredients: "Krumpir, 2 jaja, maslac, voda i sol",
        preparation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: " 50 min",
        difficulty: "Hard"
    },
    {
        name: "Lazanje",
        image: "https://coolinarika.azureedge.net/images/_variations/c/9/c9f32c3ee0a010da13b355d8d5d2af51_header.jpg?v=11",
        description: "Ovaj recept pravim već 35 godina i još se nije desilo da nije bio obožavan!",
        ingredients: "Maslinovo ulje, 1 veći luk, pola kile mljevenog mesa, umak od rajčice, vegeta",
        preparation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: " 60 min",
        difficulty: "Medium"
    },
    {
        name: "Torta s višnjama",
        image: "https://coolinarika.azureedge.net/images/_variations/4/b/4b1c2d2a76aba3857b8caa64b46d725f_header.jpg?v=1",
        description: "Neodoljiva kombinacija vanilije, čokolade i višanja…",
        ingredients: "5 jaja, 120g šećera, 100g brašna, 15ml mlijeka,",
        preparation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        time: " 50 min",
        difficulty: "Hard"
    }
]

function seedDB(){
    //Remove recipes from db
    Recipe.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed recipes.");
        }
    });

    //fill database
    data.forEach(function(seed){
        Recipe.create(seed, function(err){
            if(err){
                console.log(err);         
            } else {
                console.log("created a recipe");
            }
        });
    });
}

module.exports = seedDB;