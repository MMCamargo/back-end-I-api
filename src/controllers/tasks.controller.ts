import { tasksRepository } from '../repositories';
import { IDefaultResponse } from '../common/models';
import { mergeObjectsWithSameKey } from './utils/functions';
import { Request, Response } from 'express';

class TasksController {
	async post(req: Request, res: Response) {
		const { userUid, title, content } = req.body;

		const newTask = await tasksRepository.create(userUid, title, content);

		return res.status(201).json({
			success: true,
			data: newTask,
		} as IDefaultResponse);
	}

	async getAll(req: Request, res: Response) {
		const tasks = await tasksRepository.getAll();

		return res.status(200).json({
			success: true,
			data: tasks,
		});
	}

	async getOne(req: Request, res: Response) {
		const { uid } = req.params;

		const task = await tasksRepository.getOne(uid);

		return res.status(200).json({
			success: true,
			data: task,
		});
	}

	async getUserTasks(req: Request, res: Response) {
		const { userUid } = req.params;

		const userTasks = await tasksRepository.getUserTasks(userUid);

		return res.status(200).json({
			success: true,
			data: userTasks,
		});
	}

	async searchTasks(req: Request, res: Response) {
		const { userUid } = req.params;
		const { text } = req.query;

		const userTasks = await tasksRepository.searchTasks(
			userUid,
			text!.toString()
		);

		const filteredTasks = mergeObjectsWithSameKey(userTasks, 'uid');

		return res.status(200).json({
			success: true,
			data: filteredTasks,
		});
	}
}

const tasksController = new TasksController();

export default tasksController;
