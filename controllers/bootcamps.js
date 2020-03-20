exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Display all bootcamps' });
};

exports.getBootcampById = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Display bootcamp ${req.params.id}` });
};

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};