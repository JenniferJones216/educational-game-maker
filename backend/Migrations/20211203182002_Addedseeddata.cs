using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class Addedseeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Wordsearches",
                columns: new[] { "Id", "Height", "Keywords", "Matrix", "UserId", "Width" },
                values: new object[] { 2, 10, "java", "j,e,f,b,l,p,e,p,r,e,c,a,m,d,c,i,m,g,t,c,o,i,v,o,k,p,r,j,s,m,p,b,w,a,s,q,r,o,u,a,r,i,x,i,l,e,l,h,r,s,w,o,l,c,q,l,i,r,p,c,s,c,r,e,e,a,u,m,g,r,a,l,x,h,p,b,u,r,y,i,j,a,l,a,y,c,a,l,m,p,c,l,o,j,u,r,e,r,m,t", 1, 10 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
