import { PagingDto } from "src/infrastructure/common/dto/paging.dto";
import { Page } from "../../../infrastructure/common/services/paging.service";
import { ChatBot } from "../domain/chatbot.entity";

/**
 * IChatBotRepository 인터페이스
 */
export interface IChatBotRepository {
  /**
   * 챗봇을 생성합니다.
   * @param chatBot 챗봇 엔티티
   * @returns 생성된 챗봇
   */
  createChatBot(chatBot: ChatBot): Promise<ChatBot>;

  /**
   * 챗봇을 수정합니다.
   * @param chatBot 챗봇 엔티티
   * @returns 수정된 챗봇
   */
  updateChatBot(chatBot: ChatBot): Promise<ChatBot>;

  /**
   * 챗봇을 삭제합니다.
   * @param id 챗봇 ID
   */
  deleteChatBot(id: number): Promise<void>;

  /**
   * ID로 챗봇을 조회합니다.
   * @param id 챗봇 ID
   * @returns 조회된 챗봇
   */
  findChatBotById(id: number): Promise<ChatBot>;

  /**
   * 모든 챗봇을 조회합니다.
   * @returns 모든 챗봇 목록
   */
  findAllChatBots(dto: PagingDto): Promise<Page<ChatBot>>;
}