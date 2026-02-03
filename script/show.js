function showBooks() {
                content.className = "show";
                detail.className = "hide";
                nav.className = "hide";
                footer.className = "show";
                auBook.pause();
}


// detail
            function showDetail(bookId) {
                content.className = "hide";
                detail.className = "show";
                nav.className = "show";
                footer.className = "show";


                let curBook = productData.find(el => el.id == bookId);

                nTitle.innerHTML = curBook.title;
                dImg.src = "./images/b" + curBook.pic;
                console.log(dImg.src);

                dTitle.innerHTML = curBook.title;
                dDes.innerHTML = curBook.decription;
                dWriter.innerHTML = curBook.writer;
                dBTime.innerHTML = curBook.time + "دقیقه";
                dBStar.innerHTML = curBook.score + " از 10";
                tTitle.innerHTML = curBook.title;

                var a = curBook.category;
                var c = [];
                
                for (let i = 0; i < a.length; i++) {
                    let cate = category.find(el => el.id == a[i]);
                    c.push(cate.cat);
                }

                dBCat.innerHTML = c[0];

                dCats.innerHTML = "";
                for (let i = 0; i < c.length; i++){
                    var ca = document.createElement("div");
                    ca.className = "ca" + i;
                    ca.innerHTML = c[i];
                    dCats.appendChild(ca);
                }
                

                // load same

                let sameWriters = productData.filter(el => el.writer == curBook.writer);

                
            // }


            }

            


