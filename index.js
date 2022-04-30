// Initially remove sponsor elements
removeSponsorElements();

// Query root result row list
let resultList = document.querySelector("[data-test-id='virtuoso-item-list']");

const observer = new MutationObserver(() => {
  removeSponsorElements();
});

observer.observe(resultList, {
  childList: true, // monitor target node nodes changes
  attributes: false, // monitor target attribute changes
  characterData: false,
});

function removeSponsorElements() {
  const sponsorTexts = document.querySelectorAll(".sWrlw");
  sponsorTexts.forEach((sponsorElement) => {
    // Remove the item of the sponsor text
    sponsorElement.parentElement.parentElement.parentElement.remove();
  });
}
