import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../Resources/css/custom.css";

const MainLayout = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-6">
          <img src="img/m1.png" class="img-fluid" alt="" />
        </div>
        <div class="col-sm-6 mt-5">
          <div class="row tit">
            <h4 class="">wellcom to Momen Expense Manager </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div class="row">
            <div class="mb-3 col-md-6">
              <label class="form-label">Title</label>
              <input type="text" class="form-control addTitle" aria-describedby="" />
            </div>

            <div class="mb-3 col-md-6">
              <label class="form-label">Date</label>
              <input type="date" class="form-control addDate" aria-describedby="" />
            </div>


            <div class="mb-3 col-md-6">
              <label class="form-label">Value</label>
              <input type="number" class="form-control addValue" aria-describedby="" />
            </div>
            <div class="mb-3 col-md-6">
              <label for="title" class="form-label">Description</label>
              <input type="text" class="form-control addDescrption" aria-describedby="" />
            </div>
            <div class="mb-3 col-md-12 text-right">
              <button type="submit" class="btn btn-primary addBtn">Add</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="custom-card ">
          <table class="table ">
            <thead>
              <tr>
                <th> Title</th>
                <th> Date</th>
                <th>value</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td> House rent </td>
                <td> 2022-05-09</td>
                <td>300$ </td>
                <td colspan="2">any descrption can be here </td>
                <td class="text-right"><a href="#" class="delete" ><i class="fa fa-trash-o"
                  aria-hidden="true" /></a></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MainLayout