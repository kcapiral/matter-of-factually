
// IMPORTANT
// always start counting from 0 in programming.

let pages = [];

$(document).ready(() => {

  pages = $(".page").toArray();
  $(pages).hide();
  $(".action-row").hide();
  firstPageFunction();

});

// $("#toNextPage(5)").window.open("https://www.somewebsite.com", "_blank", "toolbar=yes,top=500,left=500,width=400,height=400");

//given the current page, go to current page + 1
// aka, go to next page.
const toNextPage = (currentPage) => {
  // change header color:
  let nextPage = parseInt(currentPage) + 1;
  let pageContainerLeft = 100 * nextPage;

  let headerColor = (nextPage % 2 != 0) ? "black" : "white";
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
  let secondary = $(".secondary");
  let secondaryItems = $(secondary).find("div");
  console.log($(".action-row:eq(1)").show());
  let actionButton = $("#page-one-action");
  // console.log(actionButton);
  $(secondaryItems).css({"visibility": "hidden", "opacity": 0});
  secondary.hide();
  actionButton.hide();


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
  }, 2000)

};

const secondPageFunction = () => {
  $(pages[1]).show();
}

const thirdPageFunction = () => {
  $(pages[2]).show();
}

const fourthPageFunction = () => {
  $(pages[3]).show();
}

const fifthPageFunction = () => {
  $(".modal").hide();
  $(pages[4]).show();
}

const sixthPageFunction = () => {
  $(pages[5]).show();
}

const seventhPageFunction = () => {
  $(pages[6]).show();
}

const eigthPageFunction = () => {
  $(pages[7]).show();
}

// function openWindow() {
//   let facebookWindow = window.open('https://www.facebook.com', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=400,height=400');
//   $(".new-window");
// }
