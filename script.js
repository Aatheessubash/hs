const searchInput = document.querySelector('#search-box input');
const friendList = document.querySelector('#friend-list');

searchInput.addEventListener('input', searchFriends);

function searchFriends() {
  const query = searchInput.value.toLowerCase();
  const friendItems = friendList.children;
  let found = false;

  // Loop through the friend list items
  for (let i = 0; i < friendItems.length; i++) {
    const friendItem = friendItems[i];
    const friendName = friendItem.querySelector('.friend-name').textContent.toLowerCase();

    // Check if the friend name matches the search query
    if (friendName.includes(query)) {
      // Move the matching friend item to the top of the list
      friendList.insertBefore(friendItem, friendList.firstChild);
      found = true;
    }
  }

  // If no matching friends are found, display a "No results found" message
  if (!found && query !== '') {
    const noResultsMessage = document.createElement('li');
    noResultsMessage.textContent = 'No results found';
    noResultsMessage.classList.add('no-results');
    friendList.appendChild(noResultsMessage);
  } else {
    // Remove any existing "No results found" message
    const noResultsMessage = friendList.querySelector('.no-results');
    if (noResultsMessage) {
      noResultsMessage.remove();
    }
  }
}

// Get the share invite button and the share container
const shareInviteBtn = document.getElementById('share-invite-btn');
const shareContainer = document.querySelector('.share-container');

// Add an event listener to the share invite button
shareInviteBtn.addEventListener('click', () => {
  // Toggle the visibility of the share container
  shareContainer.classList.toggle('show');
});

// Add an event listener to the close button
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  // Hide the share container
  shareContainer.classList.remove('show');
});