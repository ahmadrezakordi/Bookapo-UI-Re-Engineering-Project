
            // scroll
            window.onscroll = function(){
                if (window.pageYOffset > 100) {
                    header.classList.add('scroll');
                    up.className = "show";
                } else{
                    header.classList.remove('scroll');
                    up.className = "hide";
                }
            }

            // up
            function up1() {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }

            // grid
            fillWithBooks("gal1", productData);
            fillWithBooks2("gal3", productData);
            fillWithBooks3("gal4", productData);
            fillWithBooks("gal5", productData);

            // subMenu
            zirCat1("cat1", zir);
            zirCat2("cat2", zir);
            zirCat3("cat3", zir);

            // search
            search.onkeyup = searchBooks;

            overlay.onclick = function(){
                overlay.className = "hide";
                results.className = "hide";
            }

            // slider
            var s;
            play();

            function con() {
                con1.style.color = "blue" ;
            }

            // play

            function m1play() {
                mpause.className = "show";
                auBook.play();
            }

            function m1play1() {
                mplay.className = "show";
                mpause.className = "hide";
                auBook.pause();
            }

            const aud = document.querySelector(".aud");

            auBook.addEventListener("timeupdate", function() {
                const progress = (auBook.currentTime / auBook.duration) * 100;
                aud.value = progress;
            });

            aud.addEventListener("input", function() {
                const time = (aud.value / 100) * auBook.duration;
                auBook.currentTime = time;
            });

            auBook.addEventListener("ended", function() {
                mplay.className = "show";
                mpause.className = "hide";
                aud.value = 0;
            });


            // catIcon

            if (catHolder.style.visibility == "visible") {
                cat2Ic.style.background = "url(../photos/photos/cat22.png) no-repeat 120% 50%";
            }
