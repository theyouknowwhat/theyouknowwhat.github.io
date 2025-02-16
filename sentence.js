            var noun1, noun2, verb1, verb2, place, adjectives, adverbs, preposition;
            noun1 = ["artist", "transexual", "woman", "anarchist", "printmaker", "old lady", "person", "wild horse", "bad dog"];
            noun2 = ["artist", "transexual", "woman", "anarchist", "", "teacher", "old lady", "professor", "hamster", "dog"];
            verb1 = ["living", "working", "toiling", "loving life", "chilling", "dreaming", "creating", "sleeping", "crunching", "galloping"];
            verb2 = ["living", "working", "toiling", "loving", "calling home", "chilling", "dreaming", "creating", "sleeping", "crunching"];
            place = ["Philadelphia", "good times", "literal heaven", "the evil empire", "the car", "the hot tub", "the fuckin beach", ]
            adjectives = ["multi-disciplinary", "transexual", "silly", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
            adverbs = ["slowly", "elegantly", "defiantly", "haughtily", "discretely", "humbly", "proudly", "shockingly", "calmly", "passionately"];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 9);
              var rand2 = Math.floor(Math.random() * 10);
              var rand3 = Math.floor(Math.random() * 10);
              var rand4 = Math.floor(Math.random() * 7);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = "is a " + adjectives[rand1] + " " + noun1[rand1] + " " + adverbs[rand2] + " " + verb1[rand3] + " in " + place [rand4] + ".";

              document.getElementById('sentence').innerHTML =   content ;
            };
            sentence();