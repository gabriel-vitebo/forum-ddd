import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answer-repository'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer) => {
    return
  },
}

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)
  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'New Answer'
  })

  expect(answer.content).toEqual('New Answer')

})