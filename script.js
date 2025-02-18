
document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("imageCategory");
  const characterFieldsContainer = document.getElementById("charFields");
  const personFieldsContainer = document.getElementById("personFields");

  if (categorySelect.value === "zero") {
    characterFieldsContainer.classList.add("qi-hidden");
    personFieldsContainer.classList.add("qi-hidden");
  }

  categorySelect.addEventListener("change", function () {
    // Check if the "zero" value is selected (default)
    if (this.value === "zero") {
      characterFieldsContainer.classList.add("qi-hidden");
      personFieldsContainer.classList.add("qi-hidden");
    } else if (this.value === "character") {
      characterFieldsContainer.classList.remove("qi-hidden");
      personFieldsContainer.classList.add("qi-hidden");
    } else if (this.value === "person") {
      personFieldsContainer.classList.remove("qi-hidden");
      characterFieldsContainer.classList.add("qi-hidden");
    } else {
      // For other categories, hide both fields
      characterFieldsContainer.classList.add("qi-hidden");
      personFieldsContainer.classList.add("qi-hidden");
    }
  });
});


//new-script
document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("imageCategory");
  const rightSection = document.getElementById("quest-section");

    const originalContent = rightSection.innerHTML;  

  const newContent = `
    <section class="questions-image-input2" id="new-quest-section2">
      <div class="qi-row">
        <div id="imagePreview" class="qi-image-preview-new">
          <strong style="font-size: 30px; font-family: 'Gill Sans', sans-serif;">
            Drag and drop an image here, or select image from database
          </strong>
        </div>
      </div>

      <div class="labels" style="display: flex;">
        <label for="imageCategory" style="margin-bottom: 1.5px; color: #333; font-weight: bold">Select Category:</label>
        <label for="firstName" class="catName" style="margin-bottom: 1.5px">Name:</label>
      </div>

      <div class="form-group" id="new-group">
        <select id="newCategory" name="newCategory" class="qi-select new-form">
          <option value="place">Place</option>
          <option value="thing">Thing</option>
          <option value="character">Character</option>
          <option value="person">Person</option>
        </select>
        <input type="text" id="firstName" name="firstName" class="qi-select new-form" placeholder="Enter Name">
        <button type="btn" class="btn btn-primary">Submit Image Only</button>
      </div>

      <div class="form-row tags-sec2">
        <label for="tags">Tags:</label>
        <input type="text" id="tags" class="tag" name="tags" placeholder="Enter tags, separated by commas">
      </div>

      <div class="qi-row qi-action-buttons-new">
        <button type="button" id="clearImageForm" class="qi-button qi-button-clear-new">Clear</button>
        <button type="button" id="editQuestion" class="qi-button qi-button-edit-new">Edit</button>
        <button type="submit" id="uploadImage" class="qi-button qi-button-submit-new">Submit</button>
      </div>

      <div class="form-row">
        <label for="searchImages" class="qi-label">Search Images:</label>
        <input type="text" id="searchImages" name="searchImages" class="qi-text-input" placeholder="Search uploaded images...">
      </div>

      <div id="questionsDisplay"></div>
    </section>`;


  categorySelect.addEventListener("change", function () {
    if (this.value === "thing" || this.value === "place") {
      rightSection.innerHTML = newContent;
    }
  });
});
