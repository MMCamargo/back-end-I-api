import { IDefaultResponse } from '../../../../common/models';
import { Request, Response, NextFunction } from 'express';

const checkUniqueEmail = (req: Request, res: Response, next: NextFunction) => {
	const { email } = req.body;

	const someEqualEmail = false;

	if (someEqualEmail) {
		return res.status(400).json({
			success: false,
			message: 'Email already registered.',
		} as IDefaultResponse);
	}

	next();
};

export default checkUniqueEmail;
