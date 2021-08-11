import { ExportExcelService } from './excel/export-excel.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private ExportExcel: ExportExcelService
    ) { };
    public dataAll = [
        {
            name: "Phạm Lan",
            birthday: "2020",
            age: 20
        },
        {
            name: "Phạm Lan",
            birthday: "2020",
            age: 20
        },
        {
            name: "Phạm Lan",
            birthday: "2020",
            age: 20
        },
        {
            name: "Phạm Lan",
            birthday: "2020",
            age: 20
        },
        {
            name: "Nguyễn Ngọc",
            birthday: "2021",
            age: 30
        },
    ]
    //0 là giá trị ban đầu của tổng nha
    public tongtuoi = this.dataAll.reduce((tong, doituong) => tong + doituong.age, 0);
    exportExcel() {
        console.error("Đã click vào button export excel");
        this.ExportExcel.exportToExcelPro({
            myData: this.dataAll,
            fileName: 'user',
            sheetName: 'Usersss',
            report: "Báo cáo nhá",
            myHeader: ['Tên', 'Năm sinh', 'Tuổi'],
            myFooter: ['Tổng tuổi', '', this.tongtuoi],
            widths: [
                { width: 30 },
                { width: 20 },
                { width: 40 }
            ]
        });

    }
}
