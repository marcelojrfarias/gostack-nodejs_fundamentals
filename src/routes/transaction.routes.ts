import { Router } from 'express';
import CreateTransactionService from '../services/CreateTransactionService';

import TransactionsRepository from '../repositories/TransactionsRepository';

const transactionsRepository = new TransactionsRepository();

const transactionRouter = Router();

transactionRouter.get('/', (request, response) => {
  try {
    const transactions = transactionsRepository.all();

    const balance = transactionsRepository.getBalance();

    return response.status(200).json({ transactions, balance });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const createTransaction = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = createTransaction.execute({
      title,
      value,
      type,
    });

    return response.status(200).json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
