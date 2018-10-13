import { AvatarSource } from "./avatar-source.enum";

/**
 * Contract of all Sources.
 * Every source must implements the fetch mehod
 * in order to provide the avatar source.
 */
export interface Source {
  readonly sourceType: AvatarSource;
  sourceId: string;
  getAvatar(size?: number): string;
}
