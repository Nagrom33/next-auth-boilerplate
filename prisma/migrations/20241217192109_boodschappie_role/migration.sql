-- AlterTable
ALTER TABLE `User` MODIFY `role` ENUM('Admin', 'Moderator', 'User', 'Guest') NOT NULL DEFAULT 'Guest';
