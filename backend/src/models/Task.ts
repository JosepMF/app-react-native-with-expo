import { connect } from "../database";

export class Task {
  public title: string;
  public description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  public async saveTask(): Promise<void> {
    const conn = await connect();
    await conn.query(
      "INSERT INTO `tasks` (`id`, `title`, `description`, `create_at`) VALUES (NULL, ?, ?, current_timestamp());",
      [this.title, this.description]
    );
  }

  public static async getTask(id: string): Promise<any> {
    const conn = await connect();
    const q: any = await conn.query("SELECT * FROM tasks WHERE id=?", [id]);
    return q[0];
  }

  public static async getTasks(): Promise<any> {
    const conn = await connect();
    const q: any = await conn.query("SELECT * FROM tasks");
    return q[0];
  }

  public static async deleteTask(id: string): Promise<void> {
    const conn = await connect();
    await conn.query("DELETE FROM `tasks` WHERE `tasks`.`id`=?", [id]);
  }

  public static async editTask(
    title: string,
    description: string,
    id: string
  ): Promise<void> {
    const conn = await connect();
    await conn.query(
      "UPDATE `tasks` SET `title`=?, `description`=? WHERE `tasks`.`id`=?;",
      [title, description, id]
    );
  }
}
