/*
  Warnings:

  - Added the required column `course_id` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "course_id" TEXT NOT NULL,
    CONSTRAINT "students_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_students" ("age", "created_at", "id", "name", "updated_at") SELECT "age", "created_at", "id", "name", "updated_at" FROM "students";
DROP TABLE "students";
ALTER TABLE "new_students" RENAME TO "students";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
