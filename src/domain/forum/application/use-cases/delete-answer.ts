import { AnswerRepository } from "../repositories/answer-repository";

interface DeleteAnswerUseCaseRequest {
  authorId: string,
  answerId: string
}

interface DeleteAnswerUseCaseResponse { }

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswerRepository) { }

  async execute({
    authorId,
    answerId
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      throw new Error('Answer not found!')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not Allowed')
    }

    await this.answersRepository.delete(answer)

    return {}
  }
}
