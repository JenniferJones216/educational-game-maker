using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class extraClues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 18,
                columns: new[] { "Answer", "Clue" },
                values: new object[] { "DATDA", "Which Hogwarts teaching position is cursed? (Acronym)" });

            migrationBuilder.InsertData(
                table: "CrosswordQuestions",
                columns: new[] { "Id", "Answer", "Clue", "CrosswordId" },
                values: new object[] { 51, "Wheezes", "Weasley Wizard ____ (joke shop)", 1 });

            migrationBuilder.CreateIndex(
                name: "IX_CrosswordQuestions_CrosswordId",
                table: "CrosswordQuestions",
                column: "CrosswordId");

            migrationBuilder.AddForeignKey(
                name: "FK_CrosswordQuestions_Crosswords_CrosswordId",
                table: "CrosswordQuestions",
                column: "CrosswordId",
                principalTable: "Crosswords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CrosswordQuestions_Crosswords_CrosswordId",
                table: "CrosswordQuestions");

            migrationBuilder.DropIndex(
                name: "IX_CrosswordQuestions_CrosswordId",
                table: "CrosswordQuestions");

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.UpdateData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 18,
                columns: new[] { "Answer", "Clue" },
                values: new object[] { "DefenseAgainstTheDarkArts", "Which Hogwarts teaching position is cursed?" });
        }
    }
}
