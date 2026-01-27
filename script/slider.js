pos1 = 0;
            function go_left1(){
                if (pos1 > -90) {
                    pos1 = pos1 - 30;
                    gal1.style.right = pos1 + "%";
                }
            }

            function go_right1(){
                if (pos1 < 0) {
                    pos1 = pos1 + 30;
                    gal1.style.right = pos1 + "%";
                }
            }

            // ------------------------------------------------------------------------

            pos2 = 0;
            function go_left2(){
                if (pos2 > -100) {
                    pos2 = pos2 - 100;
                    gal2.style.right = pos2 + "%";
                } else if (pos2 == -100) {
                    pos2 = 0;
                    gal2.style.right = pos2 + "%";
                }
            }

            function go_right2(){
                if (pos2 < 0) {
                    pos2 = pos2 + 100;
                    gal2.style.right = pos2 + "%";
                }
            }

            // ------------------------------------------------------------------------

            pos3 = 0;
            function go_left3(){
                if (pos3 > -90) {
                    pos3 = pos3 - 30;
                    gal3.style.right = pos3 + "%";
                }
            }

            function go_right3(){
                if (pos3 < 0) {
                    pos3 = pos3 + 30;
                    gal3.style.right = pos3 + "%";
                }
            }

            // ------------------------------------------------------------------------

            pos4 = 0;
            function go_left4(){
                if (pos4 > -90) {
                    pos4 = pos4 - 30;
                    gal4.style.right = pos4 + "%";
                }
            }

            function go_right4(){
                if (pos4 < 0) {
                    pos4 = pos4 + 30;
                    gal4.style.right = pos4 + "%";
                }
            }

            // ------------------------------------------------------------------------

            pos5 = 0;
            function go_left5(){
                if (pos5 > -90) {
                    pos5 = pos5 - 30;
                    gal5.style.right = pos5 + "%";
                }
            }

            function go_right5(){
                if (pos5 < 0) {
                    pos5 = pos5 + 30;
                    gal5.style.right = pos5 + "%";
                }
            }

            // ------------------------------------------------------------------------

            pos6 = 0;
            function go_left6(){
                if (pos6 > -75) {
                    pos6 = pos6 - 25;
                    gal6.style.right = pos6 + "%";
                }
            }

            function go_right6(){
                if (pos6 < 0) {
                    pos6 = pos6 + 25;
                    gal6.style.right = pos6 + "%";
                }
            }

            // ------------------------------------------------------------------------

            function play() {
                s = setInterval("go_left2()", 2000);
            }
