import {
	ApplicationConfig,
	provideZoneChangeDetection,
	isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import {
	provideTransloco,
	provideTranslocoLoadingTpl,
} from '@jsverse/transloco';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideAnimations(),
		provideRouter(routes),
		provideHttpClient(),
		provideTransloco({
			config: {
				availableLangs: [
					{ id: 'ar', label: 'Arabic' },
					{ id: 'pt-br', label: 'Portuguese (Brazil)' },
					{ id: 'zh-tw', label: 'Chinese (Traditional)' },
					{ id: 'zh-cn', label: 'Chinese (Simplified)' },
					{ id: 'hr', label: 'Croatian' },
					{ id: 'cs', label: 'Czech' },
					{ id: 'da', label: 'Danish' },
					{ id: 'nl', label: 'Dutch' },
					{ id: 'en', label: 'English' },
					{ id: 'fi', label: 'Finnish' },
					{ id: 'fr', label: 'French' },
					{ id: 'de', label: 'German' },
					{ id: 'el', label: 'Greek' },
					{ id: 'hu', label: 'Hungarian' },
					{ id: 'it', label: 'Italian' },
					{ id: 'ja', label: 'Japanese' },
					{ id: 'ko', label: 'Korean' },
					{ id: 'es-mx', label: 'Spanish (Mexico)' },
					{ id: 'no', label: 'Norwegian' },
					{ id: 'pl', label: 'Polish' },
					{ id: 'pt', label: 'Portuguese' },
					{ id: 'ru', label: 'Russian' },
					{ id: 'es', label: 'Spanish' },
					{ id: 'sv', label: 'Swedish' },
					{ id: 'tr', label: 'Turkish' },
				],
				defaultLang: 'en',
				// Remove this option if your application doesn't support changing language in runtime.
				reRenderOnLangChange: true,
				prodMode: !isDevMode(),
			},
			loader: TranslocoHttpLoader,
		}),
		provideTranslocoLoadingTpl(LoadingSpinnerComponent),
	],
};
