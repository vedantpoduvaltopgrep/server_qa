// controllers/serviceController.js
const { createService, getServicesByUser, updateService, deleteService } = require('../models/serviceModel');

async function create(req, res) {
  const { vehicle_number, service_type, date } = req.body;

  if (!vehicle_number || !service_type || !date)
    return res.status(400).json({ error: "All fields required" });

  const service = { vehicle_number, service_type, date, user_id: req.user.id };

  try {
    const [id] = await createService(service);
    res.json({ message: "Service booked successfully", id });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ error: "Failed to create service" });
  }
}

async function list(req, res) {
  try {
    const services = await getServicesByUser(req.user.id);
    res.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    await updateService(id, req.body);
    res.json({ message: "Service updated", id });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ error: "Failed to update service" });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    await deleteService(id);
    res.json({ message: "Service deleted", id });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({ error: "Failed to delete service" });
  }
}

module.exports = { create, list, update, remove };