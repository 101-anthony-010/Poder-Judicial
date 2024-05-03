const Info = require("../model/info.model");
const catchAsync = require("../utils/catchAsync");

exports.createInfo = catchAsync(async (req, res, next) => {
  const { ip, marcaPrinter, userId, modelPrinter, codeInventory, modelCPU, serieCPU, procesador, memoryRAM, diskCapacity, diskTechnology, graphicTarget, cdrom, marcaMonitor, modeloMonitor, serieMonitor, teclado, contometro, mac, count, countFirware } = req.body

  const info = await Info.create({
    ip,
    marcaPrinter,
    userId,
    modelPrinter,
    codeInventory,
    modelCPU,
    serieCPU,
    procesador,
    memoryRAM,
    diskCapacity,
    diskTechnology,
    graphicTarget,
    cdrom,
    marcaMonitor,
    modeloMonitor,
    serieMonitor,
    teclado,
    contometro,
    mac,
    count,
    countFirware
  })

  res.status(200).json({
    status: "Success",
    info
  })
});

exports.findOneInfo = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const info = await Info.create({
    where: {
      id
    }
  })

  res.status(200).json({
    status: "Success",
    info
  })
});

exports.updateInfo = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { ip, marcaPrinter, userId, modelPrinter, codeInventory, modelCPU, serieCPU, procesador, memoryRAM, diskCapacity, diskTechnology, graphicTarget, cdrom, marcaMonitor, modeloMonitor, serieMonitor, teclado, contometro, mac, count, countFirware } = req.body
  

  const info = await Info.findOne({
    where: {
      id
    }
  })

  const newInfo = await info.update({
    ip,
    marcaPrinter,
    userId,
    modelPrinter,
    codeInventory,
    modelCPU,
    serieCPU,
    procesador,
    memoryRAM,
    diskCapacity,
    diskTechnology,
    graphicTarget,
    cdrom,
    marcaMonitor,
    modeloMonitor,
    serieMonitor,
    teclado,
    contometro,
    mac,
    count,
    countFirware
  })

  res.status(200).json({
    status: "Success",
    newInfo
  })
});