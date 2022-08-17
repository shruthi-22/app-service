import {Router, Request, Response} from 'express';
export const router = Router();

export interface Book {
  title: string;
  author: string;
}

const books: Book[] = [
  {
    title: 'lorem',
    author: 'Author X',
  },
  {
    title: 'ipsum',
    author: 'Author Y',
  },
];

router.get('/', (req: Request, res: Response) => {
  res.json({
    data: books,
    status: 200,
    message: null,
  });
});

router.post('/', (req: Request, res: Response) => {
  books.push(req.body);
  res.json({
    data: null,
    status: 201,
    message: 'Book added successfully',
  });
});
