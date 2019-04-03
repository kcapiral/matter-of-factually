
// IMPORTANT
// always start counting from 0 in programming.

let pages = [];
let buttons = [];

$(document).ready(() => {

  pages = $(".page").toArray();
  $(pages).hide();
  buttons = $(".action-row");
  buttons.hide();
  firstPageFunction();

});

// $("#toNextPage(5)").window.open("https://www.somewebsite.com", "_blank", "toolbar=yes,top=500,left=500,width=400,height=400");

//given the current page, go to current page + 1
// aka, go to next page.
const toNextPage = (currentPage) => {
  // change header color:
  let nextPage = parseInt(currentPage) + 1;
  let pageContainerLeft = 100 * nextPage;

  let headerColor = (nextPage % 2 == 0 || nextPage == 7) ? "white" : "black";
  $("#header").css("color", headerColor);

  switch(nextPage) {
    case 0:
      firstPageFunction();
      break;
    case 1:
      secondPageFunction();
      break;
    case 2:
      thirdPageFunction();
      break;
    case 3:
      fourthPageFunction();
      break;
    case 4:
      fifthPageFunction();
      break;
    case 5:
        sixthPageFunction();
      break;
    case 6:
        seventhPageFunction();
      break;
    case 7:
        eigthPageFunction();
      break;
    default:
      break;
  }


const pageContainer = $("#pages-container")
    .css({"left": `-${pageContainerLeft}vw`});
}

const openModal = () => {
  $(".modal").show();
}

const firstPageFunction = () => {
  $(pages[0]).show();
  $(buttons[0]).show();
  let secondary = $(".secondary");
  let secondaryItems = $(secondary).find("div");
  let actionButton = $("#page-one-action");
  $(secondaryItems).css({"visibility": "hidden", "opacity": 0});
  secondary.hide();
  actionButton.hide();

  let firstWords = $("#page-0 .initial").blast({delimiter: "sentence"});
  fadeInWords(firstWords, 1000);

  setTimeout(() => {
    $("#test").fadeOut(2000);

    $(pages[0]).find(".initial").fadeOut(1000, () => {
      secondary.show();

      // show first line
      $(secondaryItems[0]).css({"visibility": "visible", "opacity": 1});

      // show second line after 1500ms (1.5s)
      setTimeout(() => {
        $(secondaryItems[1]).css({"visibility": "visible", "opacity": 1});
      }, 1000);

      // show button after 2500ms (2.5s)
      setTimeout(() => actionButton.fadeIn(1000), 2500);
    });
  }, 6000)

};

const secondPageFunction = () => {
  $(pages[1]).show();
  setTimeout(() => $(buttons[1]).fadeIn("slow"), 5000);
}

const thirdPageFunction = () => {
  $(pages[2]).show();
  window.open("https://thehill.com/homenews/news/416255-black-security-guard-stops-shooter-then-is-shot-by-police-while-holding?fbclid=IwAR272RpyOKecaxjCi0ec0aIMm8q7bsoUl7EoeYnhjBqXM0hg7hcLvWfmyCY", "SingleSecondaryWindowName",
      "resizable=yes,scrollbars=yes,status=yes");
  setTimeout(() => $(buttons[2]).fadeIn("slow"), 5000);
}

const fourthPageFunction = () => {
  $(pages[3]).show();
  // get the html with id="page-4" and get the child that has class="content"
  let words = $("#page-4 .content").blast({delimiter: "word"});

  //pass in the words, and pass in how much time between each word.
  fadeInWords(words, 700);

  setTimeout(() => $(buttons[3]).fadeIn("slow"), 5000);
}

const fifthPageFunction = () => {
  $(".modal").hide();
  $(pages[4]).show();
  setTimeout(() => $(buttons[4]).fadeIn("slow"), 5000);
}

const sixthPageFunction = () => {
  $(pages[5]).show();
  setTimeout(() => $(buttons[5]).fadeIn("slow"), 5000);
}

const seventhPageFunction = () => {
  $(pages[6]).show();
  setTimeout(() => $(buttons[6]).fadeIn("slow"), 5000);
  window.open("https://www.wfaa.com/article/news/nba-will-consider-shortening-games-due-to-millennial-attention-spans/386064290", "SingleSecondaryWindowName",
      "resizable=yes,scrollbars=yes,status=yes");
}

const eigthPageFunction = () => {
  $(pages[7]).show();
  setTimeout(() => $(buttons[7]).fadeIn("slow"), 5000);
}

const fadeInWords = (words, increment) => {
  $(words).hide();
  let delay = 0;

  for (let word of words) {
    setTimeout(() => $(word).fadeIn(), (delay + increment));
    delay += increment;
  }
}
