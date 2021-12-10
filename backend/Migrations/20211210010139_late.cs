using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class late : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Password", "Username" },
                values: new object[] { "123456", "Jacky" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Password", "Username" },
                values: new object[] { " yy1 ", "Roman" });
        }
    }
}
