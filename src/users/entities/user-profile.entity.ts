import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserProfiles } from '@prisma/client';

export class UserProfileEntity implements Partial<UserProfiles> {
  constructor(partial: Partial<UserProfileEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiPropertyOptional()
  avatar?: string;

  @ApiPropertyOptional()
  company?: string;

  @ApiPropertyOptional()
  website?: string;

  @ApiPropertyOptional()
  headline?: string;

  @ApiProperty()
  isEmailVerified: boolean;

  @ApiProperty()
  isPhoneVerified: boolean;

  @ApiProperty()
  isProfileActivated: boolean;

  @ApiPropertyOptional({ type: Object })
  socialLinks?: Record<string, any>;

  @ApiPropertyOptional({ type: Object })
  location?: Record<string, any>;

  @ApiProperty({ type: String, format: 'bigint' })
  connectionCount: bigint;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
