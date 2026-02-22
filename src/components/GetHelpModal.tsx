import { X, GraduationCap, Briefcase } from "lucide-react";

const YOUTH_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSftALCA74KkLKB5E6DKy3bJgiXKpdODtUaRtGGb5hQCIo1h8A/viewform?usp=publish-editor";
const CASEWORKER_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfZu8qYvMEdM5CosWmSESJhxl9joOVv3bBolY_FTWByVgJgYw/viewform?usp=header";

interface GetHelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const GetHelpModal = ({ isOpen, onClose }: GetHelpModalProps) => {
    if (!isOpen) return null;

    const handleSelect = (url: string) => {
        window.open(url, "_blank");
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Get Help - Choose your option"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-background rounded-3xl shadow-2xl w-full max-w-md p-8 animate-fade-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                        Who are you?
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Select your role so we can direct you to the right form.
                    </p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Youth */}
                    <button
                        onClick={() => handleSelect(YOUTH_FORM_URL)}
                        className="group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-border hover:border-primary bg-card hover:bg-primary/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center">
                            <div className="font-display text-lg font-semibold text-foreground">
                                I'm a Youth
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Request furniture & home essentials
                            </div>
                        </div>
                    </button>

                    {/* Case Worker */}
                    <button
                        onClick={() => handleSelect(CASEWORKER_FORM_URL)}
                        className="group flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-border hover:border-primary bg-card hover:bg-primary/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                            <Briefcase className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center">
                            <div className="font-display text-lg font-semibold text-foreground">
                                I'm a Case Worker
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                                Refer a young adult for support
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetHelpModal;
