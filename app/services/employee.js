import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EmployeeService extends Service {
  @tracked employees = [
    {
      id: 1,
      name: 'Athitya',
      email: 'athi@gmail.com',
    },
    {
      id: 2,
      name: 'Rushikesh',
      email: 'rushi@gmail.com',
    },
  ];
  @action
  addEmployee(newEmployee) {
    let data = [...this.employees];
    newEmployee.id = this.employees.length + 1;
    data.push(newEmployee);
    this.employees = data;
    return data;
  }
  @action
  updateEmployee(employeeRecord) {
    let data = [...this.employees];
    var foundIndex = data.findIndex((x) => x.id == employeeRecord.id);
    data[foundIndex] = employeeRecord;
    this.employees = data;
    return data;
  }
  @action
  deleteEmployee(empId) {
    let data = [...this.employees];

    const newRecord = data.filter((value) => {
      return value.id != empId;
    });
    console.log(newRecord);
    this.employees = newRecord;
    return newRecord;
  }
  @action
  getEmployees() {
    return this.employees;
  }
}
