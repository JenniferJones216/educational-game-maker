using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class _1205 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 2,
                column: "Matrix",
                value: "j, e, f, b, l, p, e, p, r, e, c, a, m, d, c, i, m, g, t, c, o, i, v, o, k, p, r, j, s, m, p, b, w, a, s, q, r, o, u, a, r, i, x, i, l, e, l, h, r, s, w, o, l, c, q, l, i, r, p, c, s, c, r, e, e, a, u, m, g, r, a, l, x, h, p, b, u, r, y, i, j, a, l, a, y, c, a, l, m, p, c, l, o, j, u, r, e, r, m, t");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 2,
                column: "Matrix",
                value: "j,e,f,b,l,p,e,p,r,e,c,a,m,d,c,i,m,g,t,c,o,i,v,o,k,p,r,j,s,m,p,b,w,a,s,q,r,o,u,a,r,i,x,i,l,e,l,h,r,s,w,o,l,c,q,l,i,r,p,c,s,c,r,e,e,a,u,m,g,r,a,l,x,h,p,b,u,r,y,i,j,a,l,a,y,c,a,l,m,p,c,l,o,j,u,r,e,r,m,t");
        }
    }
}
