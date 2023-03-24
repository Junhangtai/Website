


///// this function create a new image
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }

   //// event handler
function onThumbnailClick(event) {
    //// create a duplicate image
    const image = createImage(event.target.src);
    /// grab the element with an id called modalView
    const modalView = document.querySelector('#modal-view');
    //// attach the new image to modalView
    modalView.appendChild(image);

}


//// callback function 
function onStreamProcessed(text){
      ///// split the content line by line
      const urls = text.split('\n');
      //// iterate each of the value
      for (const url of urls){
        console.log(url);
          //// create a new image
          const image = createImage(url);
          //// attach a handle to this new image
          image.addEventListener('click', onThumbnailClick);
          ///// grab the element with an id called album-view
          const albumView = document.querySelector('#album-view');
          ///// append the new image to this albumView
          albumView.appendChild(image);		
      }
}


/// this function will call if fetch is successful
function onResponse(response) {
    console.log(response);
    response.text().then(onStreamProcessed);
}


/// this function will call if fetch fails
function onError(e){

}

// Main
//// fetch API returns a promise where the response object resolves into
fetch('images.txt')
.then(onResponse, onError);
