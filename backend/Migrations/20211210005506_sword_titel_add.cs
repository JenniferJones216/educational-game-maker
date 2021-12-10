using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class sword_titel_add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Wordsearches",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 1,
                column: "Title",
                value: "programing languages");

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 2,
                column: "Title",
                value: "PRO");

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 3,
                column: "Title",
                value: "general");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Wordsearches");
        }
    }
}
