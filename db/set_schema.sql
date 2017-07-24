DROP TABLE IF EXISTS users, recipes, cart;


-- userid is auth0 id
CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    userid text, 
    displayName TEXT
);

INSERT INTO users (userid, displayName)
VALUES ('1', 'ashTest');


CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    Price DECIMAL,
    Name TEXT,
    ImageFull TEXT,
    Thumbnail TEXT,
    Description TEXT,
    Servings INTEGER,
    Calories INTEGER,
    Fat INTEGER,
    Carbs INTEGER,
    Protein INTEGER
);

INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Beet Burger with Roasted Grapes & Herb Garlic Cashew Cheese', 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-thumbnail.jpg', 'Vegetable based burgers are all the rage right now, and we want you to be able to create your own at home. Earthy red beets are the base, and can be shredded by hand or pulsed in a food processor (that’s the way we like to do it) to achieve the proper consistency. Toppings include herb garlic cashew based cheese and roasted red grapes. Be sure to taste one of the grapes as they come out of the oven– it might become your new favorite snack!', 2, 850, 39, 95, 31);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Curried Millet with Asparagus & Apricot Onion Chutney', 'https://s3-us-west-2.amazonaws.com/purplecarrot/curried-millet-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/curried-millet-thumbnail.jpg', 'Millet is a gluten free ancient grain, widely known around the world for its mild flavor, versatility, and nutritional benefits. This aromatic curried millet is the perfect base for crunchy shiitake mushrooms and tender asparagus, which get kicked up with hazelnuts toasted to perfection in the skillet. The chutney comes together in mere minutes, and the recipe can be used again with any type of preserve as the base– we suggest trying rhubarb next!', 2, 650, 30, 83, 14);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Seitan Massaman Curry with Blistered Cherry Tomatoes and Brown Basmati Rice', 'https://s3-us-west-2.amazonaws.com/purplecarrot/seitan-curry-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/seitan-curry-thumbnail.jpg', 'Massaman is a staple in many Thai restaurants, but the history can be traced back to the Middle East. The tangy tamarind base of the curry gets rounded out with warm aromatic spices like cardamom, cinnamon, and cloves. We sear the seitan before it gets tossed in the sauce so that it stays crisp, so don’t be afraid to let it get nice and browned in the skillet. Adjust the heat as you go and shake the skillet frequently for best results.', 2, 870, 37, 76, 52);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Seitan Gyro with Shaved Artichoke Salad and Tahini Yogurt', 'https://s3-us-west-2.amazonaws.com/purplecarrot/seitan-gyro-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/seitan-gyro-thumbnail.jpg', 'One of the best parts about a gyro is the combination of flavors and textures. Crispy seitan, dusted with baharat spice, is paired with crunchy cucumber and a smooth vegan tahini yogurt sauce. Baharat spice is a traditional Middle Eastern blend with allspice, cloves, and cumin. It brings an authentic, warm flavor to the dish but use as little or as much as you’d like depending on your affinity to spice. Wrap everything up in warm pita and enjoy!', 2, 570, 24, 47, 39);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Elote Bowl with Lime Chickpeas and Quinoa', 'https://s3-us-west-2.amazonaws.com/purplecarrot/elote-bowl-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/elote-bowl-thumbnail.jpg', 'Elote is the Spanish word for corn, and this sweet summer vegetable is the highlight of our “street corn” bowl. Mexican style corn is usually grilled, so fire it up if you have one. Instead of cutting the corn kernels from the cob, lay them whole on a hot grill and cook until charred, it should only take a few minutes. The key to crispy chickpeas is not shaking the pan too often, they should be brown in places and smell a bit toasted.', 2, 740, 28, 105, 27);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Kale Caesar with Crispy Butter Beans and Everything "Bagel" Croutons', 'https://s3-us-west-2.amazonaws.com/purplecarrot/kale-ceasar-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/kale-ceasar-thumbnail.jpg', 'Fun fact: Caesar Cardini, an Italian immigrant, is credited with inventing the Caesar salad in the 1920’s. Usually dressed with a combination of cheese, anchovies, egg, and oil, our kale Caesar takes a lighter approach, bumping up the flavor with briny capers, tahini, and dijon mustard. We also sub out run-of-the-mill croutons for “everything bagel” croutons. You’ll have trouble not eating them right off the baking sheet!', 2, 460, 16, 64, 20);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Strawberry Cherry Tomato Gazpacho with Avocado Toast & Balsamic Reduction', 'https://s3-us-west-2.amazonaws.com/purplecarrot/gazpacho-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/gazpacho-thumbnail.jpg', 'Avocado toast has made it into the headlines lately but we think it should be there all the time. What’s better than a buttery fruit (yes, avocado is a fruit) that pairs perfectly with crunchy toast? This chilled summer soup can be made in a food processor or a blender and be sure to taste and season with salt as you go. If you have time, wipe the strawberries with a damp paper towel instead of rinsing, it will keep them from absorbing water.', 2, 470, 18, 68, 12);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Portobello Steaks with Tomato Orzo Salad & Chimichurri', 'https://s3-us-west-2.amazonaws.com/purplecarrot/portobello-steaks-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/portobello-steaks-thumbnail.jpg', 'The best trick to trim asparagus is to hold the ends of a spear with both hands and find the natural snapping point towards the bottom of the stalk. Line them up and cut the entire bunch at this point, discarding the woody ends. The roasted vegetables get mixed into a tomato orzo and everything gets topped with herby, citrusy chimichurri, a South American sauce known for its bright color and bold flavor– it’s one of our all time favorites.', 2, 540, 24, 70, 15);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Eggplant Parmesan Flatbread with Shaved Zucchini and Arugula Salad', 'https://s3-us-west-2.amazonaws.com/purplecarrot/eggplant-flatbread-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/eggplant-flatbread-thumbnail.jpg', 'Mozzarella and sundried tomatoes make the dish taste like an authentic eggplant parmesan. A mandoline may be the most cost effective tool to have in your kitchen: it can help in a variety of instances from making fries to thinly slicing vegetables for a salad. If you have a grill, this is a good dish to fire it up for. The eggplant can be grilled and after the flatbreads are assembled, simply leave them on the grill for a few moments with the lid closed to melt the cheese.', 2, 770, 41, 85, 16);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Tempeh Tacos Al Pastor with Pineapple Salsa', 'https://s3-us-west-2.amazonaws.com/purplecarrot/tempeh-tacos-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/tempeh-tacos-thumbnail.jpg', 'Dried chiles are packed with concentrated flavors such as smoke and spice. Here we use a guajillo chile, a Mexican pepper that is a relatively low heat compared to the flavor it packs. We recommend that you warm your tortillas however you see fit. Don’t feel like turning on the oven? Toss them on the grill, on an open stovetop flame for a moment, or even in the microwave, covered with a damp paper towel.', 2, 710, 25, 93, 29);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Carrot Socca with Red Lettuce Blackberry Salad and Dill Dressing', 'https://s3-us-west-2.amazonaws.com/purplecarrot/carrot-socca-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/carrot-socca-thumbnail.jpg', 'Sweet shredded carrots get folded into a high protein batter before getting pan fried into tender socca cakes. Leave the peels on the carrots, they hold extra fiber and nutrients. Be sure to use a nonstick pan since the carrots are high in natural sugars and could burn easily. The juicy blackberries get tossed into the salad last and pair nicely with the zingy vinaigrette.', 2, 530, 34, 47, 14);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Watermelon Poke Bowl with Macadamia Nuts & Sea Lettuce Dressing', 'https://s3-us-west-2.amazonaws.com/purplecarrot/watermelon-poke-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/watermelon-poke-thumbnail.jpg', 'The Hawaiian “poke bowl” brings together the sea, the land, and all the diverse flavors that go along with. In our version, watermelon radish and macadamia nuts provide the earthy crunch while the savory sea lettuce, or seaweed flakes, provide the sea factor. This is a quick meal, so as soon as the rice is finished uncover it and allow it to cool a bit before building your delicious bowl.', 2, 520, 23, 77, 11);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (26.58, 'Empanadas with Black Bean Puree and Jicama-Corn Salad', 'https://s3-us-west-2.amazonaws.com/purplecarrot/empanada-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/empanada-thumbnail.jpg', 'Black beans, lime, and corn are always a good combination and it’s especially true when the black beans are smooth and creamy and the corn is seasoned with fresh cilantro and lime. Here we take half of the beans and blend them with vegan sour cream; if they get a bit dry just add an extra tablespoon of water as necessary. Since the empanadas are baked, not fried, if all of the corners aren’t sealed perfectly they’ll still be delicious.', 2, 890, 33, 141, 34);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Wicked Healthy Kitchari with Minted Cucumber Avocado Salad & Toasted Naan', 'https://s3-us-west-2.amazonaws.com/purplecarrot/kitchari-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/kitchari-thumbnail.jpg', 'This meal comes from our friends at Wicked Healthy and it’s a one pot wonder that builds flavor at every step. With a dish like this, it’s important to taste and season often– doesn’t sound too bad does it? The tarka, which is a toasted spice paste, includes mustard seeds, coriander, and cumin, and we toast it to bring out all of the aromatic goodness. If you’d prefer not to turn on the oven for the naan, try popping it in the toaster to warm.', 2, 760, 19, 117, 25);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Maple Tempeh with Lime Couscous Salad and Minty Plums', 'https://s3-us-west-2.amazonaws.com/purplecarrot/maple-tempeh-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/maple-tempeh-thumbnail.jpg', 'The flavors in this dish may seem adventurous to some, with sweet maple, fresh lime, and bright mint, but we can assure you that they come together for a delicious finish. The tempeh gets a sweet and savory marinade before crisping up in a skillet. Be sure to keep an eye on the tempeh, the sugars could caramelize quickly- they’re ready when there’s a golden brown coating on each piece. The lime couscous is seriously flavorful, and if you love lime, add a little of the zest to the salad- we won’t tell.', 2, 840, 36, 100, 35);
INSERT INTO recipes (Price, Name, ImageFull, Thumbnail, Description, Servings, Calories, Fat, Carbs, Protein) 
VALUES (22.66, 'Thrive Sweet Pepper and Hemp Seed Pesto Pizza with Broccoli and Basil', 'https://s3-us-west-2.amazonaws.com/purplecarrot/hemp-pizza-full.jpg', 'https://s3-us-west-2.amazonaws.com/purplecarrot/hemp-pizza-thumbnail.jpg', 'Fresh broccoli and basil come together to create the perfect topping for a crispy mung bean pizza crust. The pesto recipe comes from professional Ironman triathlete Brendan Brazier’s Thrive Energy cookbook — it’ll have you praising the power of green! Along with red peppers and hemp seeds, you’ll love this flatbread-style pizza for its hearty flavors and health-boosting benefits.', 2, 700, 26, 85, 37);


CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    recipesid INTEGER NOT NULL REFERENCES recipes(id),
    userid INTEGER NOT NULL REFERENCES users(id),
    quantity INTEGER,
    recipeThumbnail TEXT,
    name TEXT,
    price DECIMAL
);

INSERT INTO cart (recipesid, userid, quantity, recipeThumbnail, name, price)
VALUES (1, 1, 4, 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-thumbnail.jpg', 'Beet Burger with Roasted Grapes & Herb Garlic Cashew Cheese', 22.26);
INSERT INTO cart (recipesid, userid, quantity, recipeThumbnail, name, price)
VALUES (1, 1, 4, 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-thumbnail.jpg', 'Beet Burger with Roasted Grapes & Herb Garlic Cashew Cheese', 22.26);
INSERT INTO cart (recipesid, userid, quantity, recipeThumbnail, name, price)
VALUES (1, 1, 4, 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-thumbnail.jpg', 'Beet Burger with Roasted Grapes & Herb Garlic Cashew Cheese', 22.26);
INSERT INTO cart (recipesid, userid, quantity, recipeThumbnail, name, price)
VALUES (1, 1, 4, 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-thumbnail.jpg', 'Beet Burger with Roasted Grapes & Herb Garlic Cashew Cheese', 22.26);
INSERT INTO cart (recipesid, userid, quantity, recipeThumbnail, name, price)
VALUES (1, 1, 4, 'https://s3-us-west-2.amazonaws.com/purplecarrot/beet-burger-thumbnail.jpg', 'Beet Burger with Roasted Grapes & Herb Garlic Cashew Cheese', 22.26);


