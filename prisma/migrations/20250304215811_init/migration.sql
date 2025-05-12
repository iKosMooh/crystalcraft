-- CreateTable
CREATE TABLE `nlogin` (
    `ai` INTEGER NOT NULL AUTO_INCREMENT,
    `last_name` VARCHAR(191) NOT NULL,
    `unique_id` VARCHAR(191) NULL,
    `mojang_id` VARCHAR(191) NULL,
    `bedrock_id` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `last_ip` VARCHAR(191) NOT NULL DEFAULT '127.0.0.1',
    `last_seen` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `creation_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `email` VARCHAR(191) NULL,
    `discord` VARCHAR(191) NULL,
    `settings` VARCHAR(191) NULL,

    UNIQUE INDEX `nlogin_unique_id_key`(`unique_id`),
    UNIQUE INDEX `nlogin_mojang_id_key`(`mojang_id`),
    UNIQUE INDEX `nlogin_bedrock_id_key`(`bedrock_id`),
    UNIQUE INDEX `nlogin_email_key`(`email`),
    PRIMARY KEY (`ai`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `nlogin_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(191) NOT NULL,
    `value` LONGBLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
