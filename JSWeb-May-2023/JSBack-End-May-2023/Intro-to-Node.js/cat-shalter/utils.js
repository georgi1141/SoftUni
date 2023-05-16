
function editCat(cat) {
    return ` <form action="/catToEdit/${cat.id}" method="POST" class="cat-form" enctype="multipart/form-data">
    <h2>Edit Cat</h2>
    <label for="name">Name</label>
    <input name ="name" type="text" id="name" value="${cat.name}">
    <label for="description">Description</label>
    <textarea name="description" id="description">${cat.description}</textarea>
    <label for="image">Image</label>
    <input type="file" id="image">
    <label for="group">Breed</label>
    <select name="breed" id="group">
        <option value="${cat.breed}">${cat.breed}</option>
        <option value="American Bobtail Cat">American Bobtail Cat</option>
        <option value="Bengal Cat">Bengal Cat</option>
        <option value="British Shorthair Cat">British Shorthair Cat</option>
        <option value="Unknown">Unknown</option>
    </select>
    <button>Edit Cat</button>
  </form>`;
  }


  
  
  module.exports = editCat
