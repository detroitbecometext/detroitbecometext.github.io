import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
	name: 'appSplitToLi',
	standalone: true,
})
export class SplitToLiPipe implements PipeTransform {
	transform(value: string): string {
		return value
			.split(/[-–][\s\u00A0]|──/) // dash with space or no break space, chinese dash
			.map((item) => item.trim())
			.filter((item) => item !== '')
			.map((item) => `<li>${item}</li>`)
			.join('');
	}
}
