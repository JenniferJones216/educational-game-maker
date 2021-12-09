using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class levethadr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Password", "Username" },
                values: new object[] { " yy1 ", " x " });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Name", "Username" },
                values: new object[] { "middle", " xx " });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Name", "Password", "Username" },
                values: new object[] { 3, "hard", "yy3", "xxx" });

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Keywords", "Matrix" },
                values: new object[] { "java, ruby", "j, e, f, b, l, p, e, p, r, e, c, a, m, d, c, i, m, g, t, c, o, i, v, o, k, p, r, j, s, m, p, b, w, a, s, q, r, o, u, a, r, i, x, i, l, e, l, h, r, s, w, o, l, c, q, l, i, r, p, c, s, c, r, e, e, a, u, m, g, r, a, l, x, h, p, b, u, r, y, i, j, a, l, a, y, c, a, l, m, p, c, l, o, j, u, r, e, r, m, t" });

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Keywords", "Matrix", "UserId" },
                values: new object[] { "CANVAS, CODE, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE", "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B", 2 });

            migrationBuilder.InsertData(
                table: "Wordsearches",
                columns: new[] { "Id", "Height", "Keywords", "Matrix", "UserId", "Width" },
                values: new object[] { 3, 10, "table, white, pillow, lamp, bedding, baseboard, plant, floor, cord, bedroom", "g, h, n, s, a, l, s, t, b, o, t, a, b, e, l, a, m, p, e, u, b, a, s, e, b, o, a, r, d, t, w, r, b, e, d, w, a, r, d, c, o, h, f, l, o, r, o, t, i, g, s, l, i, l, e, c, o, t, n, t, k, t, l, t, i, a, a, o, g, u, a, i, b, s, e, y, l, l, m, t, p, l, a, n, t, f, l, o, o, r, f, r, g, y, t, y, x, q, y, e", 1, 10 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Password", "Username" },
                values: new object[] { " yy ", " xx " });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Name", "Username" },
                values: new object[] { "midele", " xx2 " });

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Keywords", "Matrix" },
                values: new object[] { "CANVAS, CODE, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE", "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B" });

            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Keywords", "Matrix", "UserId" },
                values: new object[] { "java, ruby", "j, e, f, b, l, p, e, p, r, e, c, a, m, d, c, i, m, g, t, c, o, i, v, o, k, p, r, j, s, m, p, b, w, a, s, q, r, o, u, a, r, i, x, i, l, e, l, h, r, s, w, o, l, c, q, l, i, r, p, c, s, c, r, e, e, a, u, m, g, r, a, l, x, h, p, b, u, r, y, i, j, a, l, a, y, c, a, l, m, p, c, l, o, j, u, r, e, r, m, t", 1 });
        }
    }
}
