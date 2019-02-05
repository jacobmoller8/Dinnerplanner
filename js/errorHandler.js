var handleError = (err) => {
    if(err = 'TypeError: NetworkError when attempting to fetch resource.'){
        errorContainer = `
        <div class="container-fluid col-8" id="errorContainer">
            <h2> Oh No!</h2>
            <h4> The following error occured: </h4>
            <h4>${err}</h4>
            <h6>Please check your internet connection and reload the page.</h6>
        </div>
        `
    }else{
    errorContainer = `
    <div class="container-fluid col-8" id="errorContainer">
        <h2> Oh No!</h2>
        <h4> The following error occured: </h4>
        <h4>${err}</h4>
    </div>
    `}
    return errorContainer;
}