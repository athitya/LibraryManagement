import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeeComponent extends Component {
  @service('employee') employeeService;
  @tracked employeeList = this.args.employees;
  @tracked editEmployee = {
    id: '',
    name: '',
    email: '',
  };
  @tracked errorMsg = '';
  @tracked success = '';
  @tracked isEdit = false;
  @tracked employeeId = 0;

  @action
  saveChanges() {
    if (!this.editEmployee.name) {
      this.errorMsg = 'Name cannot be empty.';
      this.success = '';
      return;
    } else if (!this.editEmployee.email) {
      this.errorMsg = 'Email cannot be empty.';
      this.success = '';
      return;
    }
    let employeeDetails = { ...this.editEmployee };
    if (!this.isEdit) {
      //add employee
      this.employeeList = this.employeeService.addEmployee(employeeDetails);
      this.errorMsg = '';
      this.success = 'Employee ' + this.editEmployee.name + ' added.';
    } else {
      this.errorMsg = '';
      this.employeeList = this.employeeService.updateEmployee(employeeDetails);
      this.success = 'Employee ' + this.editEmployee.name + ' Updated.';
    }
    // $('.modal').removeClass('show');
    // $('#exampleModal').modal('toggle')
  }

  @action
  addEmployee() {
    this.isEdit = false;
    this.editEmployee = {
      id: '',
      name: '',
      email: '',
    };
    this.resetErrorMsg();
  }

  @action
  updateEmployee(employee, id) {
    this.isEdit = true;
    let data = { ...employee };
    this.editEmployee = data;
    this.employeeId = id;
    this.resetErrorMsg();
  }

  @action
  deleteEmployee(empId) {
    this.employeeList = this.employeeService.deleteEmployee(empId);
  }

  @action
  resetErrorMsg() {
    this.success = '';
    this.errorMsg = '';
  }
}
