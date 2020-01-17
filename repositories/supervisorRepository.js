const User = require('../models/user');
const Appointment = require('../models/appointment');
const Payment = require('../models/payment');
const Assignment = require('../models/assignment');

class SupervisorRepository {
  // Save appointment to the DB
  async createAppointment(appointment) {
    const newAppointment = new Appointment(appointment);
    return await newAppointment.save();
  }

  // Find all the appointments in the DB
  async findAllAppointments() {
    return await Appointment.find();
  }

  // Find an appointment with a specific ID
  async findAppointmentById(_id) {
    return await Appointment.findById(_id);
  }

  async createPayment(paymentBody, appointment) {
    const newPayment = {
      totalHours: paymentBody.totalHours,
      totalAmount: paymentBody.totalAmount,
      appointment
    };
    const payment = new Payment(newPayment);
    return await payment.save();
  }

  async findAllPayments() {
    return await Payment.find().populate('appointment');
  }

  async createAssignment(assignmentBody, appointment) {
    const newAssignment = {
      babysitter: assignmentBody._id,
      appointment
    };
    const assignment = new Assignment(newAssignment);
    return await assignment.save();
  }

  async findAllAssignments() {
    return await Assignment.find()
      .populate('appointment')
      .populate('babysitter');
  }
}

module.exports = new SupervisorRepository();
