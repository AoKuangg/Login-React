import { validationResult } from "express-validator";

export const validationSchema = (schemas) => async (req, res, next) => {
  await Promise.all(schemas.map((schema) => schema.run(req)));
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });
  next();
};
