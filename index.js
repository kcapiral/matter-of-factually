
// IMPORTANT
// always start counting from 0 in programming.

let pages = [];

$(document).ready(() => {
  pages = $(".page").toArray();
  $(pages).hide();
  firstPageFunction();
});

//given the current page, go to current page + 1
// aka, go to next page.
const toNextPage = (currentPage) => {
  let nextPage = parseInt(currentPage) + 1;
  let pageContainerLeft = 100 * nextPage;

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
    // case :
    //   break;
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
  let actionButton = $("#page-one-action");
  // console.log(actionButton);
  $(secondaryItems).css({"visibility": "hidden", "opacity": 0});
  secondary.hide();
  actionButton.hide();


  setTimeout(() => {
    $("#test").fadeOut(1500);

    $(pages[0]).find(".initial").fadeOut(1500, () => {
      secondary.show();

      // show first line
      $(secondaryItems[0]).css({"visibility": "visible", "opacity": 1});

      // show second line after 1500ms (1.5s)
      setTimeout(() => {
        $(secondaryItems[1]).css({"visibility": "visible", "opacity": 1});
      }, 1500);

      // show button after 2500ms (2.5s)
      setTimeout(() => actionButton.fadeIn(1500), 2500);
    });
  }, 5000)

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
