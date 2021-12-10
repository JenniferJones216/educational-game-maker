using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class dndseeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "DragandDrops",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PromptText", "WordBank" },
                values: new object[] { "<div class='drop-targets' id='drop-targets'><span class='promptText'>According to some estimates, well over half of the people in the world are functionally illiterate. This means that they are unable to perform everyday </br>tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not </span><span class='box'>able to read</span><span class='promptText'> directions on medicine bottles or packages. Imagine </span><span class='box'>being</span><span class='promptText'> a parent with a sick child and being unable </span><span class='box'>to read</span><span class='promptText'> the directions on a medicine bottle. We all know that it is important for medical directions </span><span class='box'>to be understood</span><span class='promptText'> clearly. One solution is pictures. Many medical professionals are working today </span><span class='box'>to solve</span><span class='promptText'> this problem by </span><span class='box'>using</span><span class='promptText'> pictures to convey health-care information.</span></div><div class='wordbox' id='word-bank'><h3>Word Bank</h3><div class='item' id='2' draggable='true'>being</div> <div class='item' id='4' draggable='true'>to be understood</div> <div class='item' id='3' draggable='true'>to read</div> <div class='item' id='1' draggable='true'>able to read</div> <div class='item' id='6' draggable='true'>using</div> <div class='item' id='5' draggable='true'>to solve</div></div>", "According to some estimates, well over half of the people in the world are functionally illiterate. This means that they are unable to perform everyday \ntasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not {able to read} directions on medicine bottles or packages. Imagine {being} a parent with a sick child and being unable {to read} the directions on a medicine bottle. We all know that it is important for medical directions {to be understood} clearly. One solution is pictures. Many medical professionals are working today {to solve} this problem by {using} pictures to convey health-care information." });

            migrationBuilder.InsertData(
                table: "DragandDrops",
                columns: new[] { "Id", "PromptText", "Subheading", "Title", "UserId", "WordBank" },
                values: new object[] { 2, "<div class='drop-targets' id='drop-targets'><span class='promptText'>1. It's such a hot day that I could </span><span class='box'>fry an egg on the sidewalk</span><span class='promptText'></br>2. I'm so hungry that I could </span><span class='box'>eat a horse</span><span class='promptText'></br>3. He's such a rich man that he </span><span class='box'>buys a new boat when one gets wet</span><span class='promptText'></br>4. She is so sick that she </span><span class='box'>needs two beds</span><span class='promptText'></span></div><div class='wordbox' id='word-bank'><h3>Word Bank</h3><div class='item' id='1' draggable='true'>fry an egg on the sidewalk</div> <div class='item' id='4' draggable='true'>needs two beds</div> <div class='item' id='2' draggable='true'>eat a horse</div> <div class='item' id='3' draggable='true'>buys a new boat when one gets wet</div></div>", "Directions: Click and drag the phrases to the correct spaces in the text.", "Why?", 1, "1. It's such a hot day that I could {fry an egg on the sidewalk}\n2. I'm so hungry that I could {eat a horse}\n3. He's such a rich man that he {buys a new boat when one gets wet}\n4. She is so sick that she {needs two beds}" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "DragandDrops",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.UpdateData(
                table: "DragandDrops",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "PromptText", "WordBank" },
                values: new object[] { "<span class='promptText'>\r\n            According to some estimates, well over half of the people in the world are functionally illiterate.This means that they are unable to perform everyday tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not</span>\r\n            <span class='box'>able to read</span>\r\n            <span class='promptText'>directions on medicine bottles or packages.Imagine</span>\r\n            <span class='box'>being</span>\r\n            <span class='promptText'>a parent with a sick child and being unable</span>\r\n            <span class='box'>to read</span>\r\n            <span class='promptText'> the directions on a medicine bottle.We all know that it is important for medical directions</span>\r\n            <span class='box'>to be understood</span>\r\n            <span class='promptText'>clearly.One solution is pictures.Many medical professionals are working today</span>\r\n            <span class='box'>to solve</span>\r\n            <span class='promptText'>this problem by</span>\r\n            <span class='box'>using</span>\r\n            <span class='promptText'>pictures to convey health-care information.</span>", "<div class='item' id='1' draggable='true'>\r\n                to be understood\r\n            </div>\r\n            <div class='item' id='2' draggable='true'>\r\n                able to read\r\n            </div>\r\n            <div class='item' id='3' draggable='true'>\r\n               to solve\r\n            </div>\r\n            <div class='item' id='4' draggable='true'>\r\n                using\r\n            </div>\r\n            <div class='item' id='5' draggable='true'>\r\n                to read\r\n            </div>\r\n            <div class='item' id='6' draggable='true'>\r\n                being\r\n            </div>" });
        }
    }
}
