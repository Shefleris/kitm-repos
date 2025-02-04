const form = () =>{
    return `
      <div class="mb-3">
      <input type="text" class="form-control term" placeholder='Jusu adresas'>
      </div>
      <div class="mb-3">
      <input type="text" class="form-control result" readonly>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    `
}

export  default form;